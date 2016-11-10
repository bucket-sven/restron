import {
  SEARCH_SONG,
  KEYWORD_CHANGE
} from 'constants/actionTypes'

import Http from 'utils/Http'

function searchRequest(data) {
  return {
    type: SEARCH_SONG,
    data: data
  }
}

export function songList(oldState) {
  return dispatch => {
    return Http.searchSong({
      keyword: oldState.keyword,
      page: oldState.page
    }).then(data => {
      let res = JSON.parse(data.toString()).result
      let d = {
        page: oldState.page,
        keyword: oldState.keyword,
        result: res
      }
      dispatch(searchRequest(d))
    })
  }
}

export function keywordChange(keyword) {
  return {
    type: KEYWORD_CHANGE,
    keyword
  }
}
