const Client = require('node-rest-client').Client
const client = new Client()

import Urls from 'constants/Urls'
let qs = require('querystring')

let Http = {
  get: function(options = {}) {
    return new Promise(function(resolve, reject) {
      client.get(options.url, options, (data, resp) => {
        resolve(data)
      })
    });
  },

  post: function(options) {
    return new Promise((resolve, reject) => {
      client.post(options.url, options, function(data, resp) {
        resolve(data)
      })
    })
  },

  searchSong: function(options = {}) {
    let body = {
      s: options.keyword || '',
      limit: options.limit || 10,
      type: 1,
      offset: ((options.page || 1) - 1) * 10
    }
    let opt =  {
      url: Urls.NET_EASE_BASE_URL + Urls.SEARCH_MUSIC_URL,
      headers: Urls.NET_EASE_HEADER,
      data: qs.stringify(body)
    }
    return this.post(opt)
  }
}

export default Http
