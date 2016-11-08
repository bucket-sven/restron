import React, { Component } from 'react'
import { connect } from 'react-redux'
//import * as Actions from '../actions'
import { bindActionCreators } from 'redux'
import { Router, Route, hashHistory } from 'react-router'
import LoginView from 'views/LoginView'
import HomeViewBinder from 'binders/HomeViewBinder'
import RegisterView from 'views/RegisterView'
import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'
import DevTools from './DevTools'

let store = configureStore()

class App extends Component {
  render() {
    return(
      <div>
        <Provider store={store}>
          <Router history={hashHistory}>
            <Route path="/" component={LoginView} />
            <Route path="/home" component={HomeViewBinder} />
            <Route path="/register" component={RegisterView} />
          </Router>
        </Provider>
        {
          process.env.NODE_ENV === 'development' ? <DevTools store={store} /> : ''
        }
      </div>
    )
  }
}

/*
export default connect(state => ({
items: state.items,
filter: state.filter
}), dispatch => ({
actions: bindActionCreators(Actions, dispatch)
}))(App)
*/
export default App
