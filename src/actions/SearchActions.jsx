import {
  SEARCH_SONG,
  KEYWORD_CHANGE
} from 'constants/actionTypes'

var http = require('utils/Http')

function songList2(songs) {
  return {
    type: SEARCH_SONG,
    songs: songs
  }
}

export function songList(keyword) {
  return dispatch => {
    return http.searchSong({
      keyword: keyword}
    ).then(data => {
      let d = JSON.parse(data.toString()).result.songs
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
