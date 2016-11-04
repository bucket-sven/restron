import React from 'react'
import LoginView from 'containers/LoginView'
import HomeView from 'containers/HomeView'
import RegisterView from 'containers/RegisterView'
import { Router, Route, hashHistory } from 'react-router'

let AppRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={LoginView} />
    <Route path="/home" component={HomeView} />
    <Route path="/register" component={RegisterView} />
  </Router>
)

export default AppRouter
