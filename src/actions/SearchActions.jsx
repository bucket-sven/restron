import {
  SEARCH_SONG
} from 'constants/actionTypes'

export function searchSong(keyword) {
  return {
    type: SEARCH_SONG,
    keyword
  }
}
