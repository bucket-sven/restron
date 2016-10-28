import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Render from '../utils/Render.jsx'
import LoginView from '../containers/LoginView.jsx'
import Header from './Header.jsx'

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
        <div>
          <Header />
          <RaisedButton label="HOME" onClick={this.backHome} />
        </div>
      </MuiThemeProvider>
    )
  }
}
