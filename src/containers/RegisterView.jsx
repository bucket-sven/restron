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
import LogoView from 'components/LogoView'
import RegisterForm from 'components/RegisterForm'

let muiTheme = getMuiTheme({
  fontFamily: 'Microsoft YaHei'
})

class RegisterView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="root">
          <LogoView />
          <RegisterForm />
        </div>
      </MuiThemeProvider>
    )
  }

}

export default RegisterView
