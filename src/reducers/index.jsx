import { combineReducers } from 'redux'
import songList from './Home'
import clickMenu from './HomeLayout'
const rootReducer = combineReducers({
  songList,
  clickMenu
})

export default rootReducer
