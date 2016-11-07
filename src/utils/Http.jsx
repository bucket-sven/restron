const Client = require('node-rest-client').Client
const client = new Client()
module.exports = {
  get: function(options = {}, callback, err_callback) {
    options.method = "GET"
    this.request(options.url, options, callback, err_callback)
  },

  /*
  post: function(options = {}, callback, err_callback) {
    options.method = "POST"
    this.request(options, callback)
  },
  */

  /*
  post: function(options, callback) {
    client.post(options.url, options, function(data, resp) {
      callback(data);
    })
  },
  */
  post: function(options) {
    return new Promise((resolve, reject) => {
      client.post(options.url, options, function(data, resp) {
        resolve(data)
      })
    })
  },

  request: function(options = {}, callback, err_callback) {
    console.log(options);
    fetch(options.url, options)
    .then(response => response.text())
    .then(responseText => {
      callback(responseText)
    }).catch(err => {
      if(err_callback) {
        err_callback(err)
      } else {
        console.error(err);
      }
    })
  }
}
