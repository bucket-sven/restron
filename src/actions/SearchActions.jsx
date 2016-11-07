import {
  SEARCH_SONG,
  KEYWORD_CHANGE
} from 'constants/actionTypes'

export function songList(keyword) {
  return {
    type: SEARCH_SONG,
    keyword
  }
}

export function keywordChange(keyword) {
  return {
    type: KEYWORD_CHANGE,
    keyword
  }
}
