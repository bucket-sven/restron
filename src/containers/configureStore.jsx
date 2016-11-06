import {
  //compose,
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

/*
let buildStore = compose(applyMiddleware(thunk), createStore)
export default function configureStore(initialState) {
  return buildStore(rootReducer, initialState)
}
*/

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }
  return store
}
