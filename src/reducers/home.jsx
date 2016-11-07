import {
  SEARCH_SONG,
  KEYWORD_CHANGE
} from 'constants/actionTypes'

const Urls = require('constants/Urls')
var qs = require('querystring')
var http = require('utils/Http')

export default function songList(state = {}, action) {
  switch (action.type) {
    case SEARCH_SONG:
      // console.log('----------------------');
      // return [{id: 3, name: '123'}]
      // console.log(action.songs);
      let data = action.data
      return data
    case KEYWORD_CHANGE:
      state.keyword = action.keyword
      return state
    default:
      return state
  }
}

async function httpGet(options) {
  return await http.post(options)
}
