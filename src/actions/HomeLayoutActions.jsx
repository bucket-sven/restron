import {
  CLICK_MENU
} from 'constants/actionTypes'

export function clickMenu(key) {
  return {
    type: CLICK_MENU,
    key
  }
}
