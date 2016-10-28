import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Render from './render.jsx'
import LoginView from './login_view.jsx'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  backHome() {
    Render.render(<LoginView />)
  }

  render() {
    return (
      <MuiThemeProvider>
        <RaisedButton label="default" onClick={this.backHome} />
      </MuiThemeProvider>
    )
  }
}
