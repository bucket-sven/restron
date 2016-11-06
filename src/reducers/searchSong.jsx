import {
  SEARCH_SONG
} from 'constants/actionTypes'

export default function searchSong(state = '', action) {
  switch (action.type) {
    case SEARCH_SONG:
      console.log('----------------------');
      return state.push(1)
    default:
      return state
  }
}
