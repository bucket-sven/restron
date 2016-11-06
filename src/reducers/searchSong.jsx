import {
  SEARCH_SONG
} from 'constants/actionTypes'

export default function searchSong(state = {}, action) {
  switch (action.type) {
    case SEARCH_SONG:
      console.log('----------------------');
      console.log(state);
      return [{id: 1, name: '123'}]
    default:
      return state
  }
}
