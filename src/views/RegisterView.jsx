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
import LogoWidget from 'components/LogoWidget'
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
      <div className="root">
        <LogoWidget />
        <RegisterForm />
      </div>
    )
  }

}

export default RegisterView
