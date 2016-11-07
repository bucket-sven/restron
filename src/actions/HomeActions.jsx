import {
  SEARCH_SONG,
  KEYWORD_CHANGE
} from 'constants/actionTypes'

var http = require('utils/Http')

function songList2(data) {
  return {
    type: SEARCH_SONG,
    data: data
  }
}

export function songList(oldState) {
  console.log(oldState);
  console.log('search................');
  return dispatch => {
    return http.searchSong({
      keyword: oldState.keyword,
      page: oldState.page
    }).then(data => {
      let res = JSON.parse(data.toString()).result
      let d = {
        page: oldState.page,
        keyword: oldState.keyword,
        result: res
      }
      dispatch(songList2(d))
    })
  }
}

export function keywordChange(keyword) {
  return {
    type: KEYWORD_CHANGE,
    keyword
  }
}

//export * from './PageActions'
