import {
  SEARCH_SONG
} from 'constants/actionTypes'

const Urls = require('constants/Urls')
var qs = require('querystring')
var http = require('utils/Http')

export default function songList(state = [], action) {
  /*
  let body = {
    s: 'tank',
    type: 1
  }
  let options = {
    url: Urls.NET_EASE_BASE_URL + Urls.SEARCH_MUSIC_URL,
    headers: Urls.NET_EASE_HEADER,
    data: qs.stringify(body)
  }
  let data = await httpGet(options)
  let result = JSON.parse(data.toString()).result.songs
  console.log(result);
  */
  switch (action.type) {
    case SEARCH_SONG:
      // console.log('----------------------');
      // console.log(state);
      // return state
      let keyword = action.keyword
      return [{id: 1, name: '123'}]
    default:
      return state
  }
}

async function httpGet(options) {
  return await http.post(options)
}
