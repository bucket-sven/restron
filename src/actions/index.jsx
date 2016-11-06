import {
  ADD_ITEM,
  DELETE_ITEM
} from 'constants/actionTypes'

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item
  }
}

export function deleteItem(item, e) {
  return {
    type: DELETE_ITEM,
    item
  }
}
