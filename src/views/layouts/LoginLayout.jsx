import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppMenu from 'components/AppMenu'
import Wrapper from 'components/Wrapper'

export default class LoginLayout extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

LoginLayout.propTypes = {
  children: PropTypes.object.isRequired
}
