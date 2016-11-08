import React, { Component } from 'react'
import { connect } from 'react-redux'
//import * as Actions from '../actions'
import { bindActionCreators } from 'redux'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
import LoginView from 'views/LoginView'
import HomeViewBinder from 'binders/HomeViewBinder'
import LoginLayout from 'views/layouts/LoginLayout'
import HomeLayoutBinder from 'binders/HomeLayoutBinder'
import RegisterView from 'views/RegisterView'
import PasswordView from 'views/PasswordView'
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
            <Route path="/" component={LoginLayout} >
              <IndexRoute component={LoginView} />
              <Route path="login" component={LoginView} />
            </Route>
            <Route path="/" component={HomeLayoutBinder}>
              <Route path="home" component={HomeViewBinder} />
              <Route path="register" component={RegisterView} />
              <Route path="modify-passwd" component={PasswordView} />
            </Route>
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
