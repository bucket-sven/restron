import {
  KEYWORD_CHANGE
} from 'constants/actionTypes'

export default function keywordChange(state = '', action) {
  switch (action.type) {
    case KEYWORD_CHANGE:
      return action.keyword
    default:
      return state
  }
}
