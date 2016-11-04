import React from 'react'
import LoginView from 'containers/LoginView'
import Home from 'containers/Home'
import RegisterView from 'containers/RegisterView'
import { Router, Route, hashHistory } from 'react-router'

let AppRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={LoginView} />
    <Route path="/home" component={Home} />
    <Route path="/register" component={RegisterView} />
  </Router>
)

export default AppRouter
