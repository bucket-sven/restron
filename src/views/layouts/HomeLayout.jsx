import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppMenu from 'components/AppMenu'
import Wrapper from 'components/Wrapper'

export default class HomeLayout extends Component {
  render() {
    const { selectedKey, clickMenu } = this.props
    return (
      <MuiThemeProvider>
        <div className="rootApp">
          <div className="leftMenu">
            <AppMenu onClick={clickMenu} selectedKey={selectedKey} />
          </div>
          <div className="mainBody">
            <div>
              <Wrapper children={this.props.children} />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

HomeLayout.propTypes = {
  children: PropTypes.object.isRequired
}
