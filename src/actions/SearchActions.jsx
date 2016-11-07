import {
  SEARCH_SONG
} from 'constants/actionTypes'

export function songList(keyword) {
  return {
    type: SEARCH_SONG,
    keyword
  }
}
