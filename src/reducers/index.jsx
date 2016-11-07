import { combineReducers } from 'redux'
import songList from './searchSong'
import keywordChange from './keywordChange'
const rootReducer = combineReducers({
  songList,
  keywordChange
})

export default rootReducer
