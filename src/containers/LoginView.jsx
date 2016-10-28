import React from 'react'
import ReactDOM from 'react-dom'

const events = window.require('events')
const path = window.require('path')
const fs = window.require('fs')

const electron = window.require('electron')
const {ipcRenderer, shell} = electron
const {dialog} = electron.remote

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LogoView from '../components/LogoView.jsx'
import LoginForm from '../components/LoginForm.jsx'

let muiTheme = getMuiTheme({
  fontFamily: 'Microsoft YaHei'
})

class LoginView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.root}>
          <LogoView />
          <LoginForm />
        </div>
      </MuiThemeProvider>
    )
  }

}

const styles = {
  root: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default LoginView
