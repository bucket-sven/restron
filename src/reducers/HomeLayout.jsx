import {
  CLICK_MENU
} from 'constants/actionTypes'

export default function clickMenu(state='home', action) {
  switch (action.type) {
    case CLICK_MENU:
      return action.key
    default:
      return state
  }
}
