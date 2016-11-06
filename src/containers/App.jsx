import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import { bindActionCreators } from 'redux'
import { Router, Route, hashHistory } from 'react-router'
import LoginView from 'views/LoginView'
import HomeView from 'views/HomeView'
import RegisterView from 'views/RegisterView'
import configureStore from './configureStore'
import { Provider } from 'react-redux'

let store = configureStore()

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={LoginView} />
          <Route path="/home" component={HomeView} />
          <Route path="/register" component={RegisterView} />
        </Router>
      </Provider>
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
