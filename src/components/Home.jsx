import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Render from 'utils/Render'
import LoginView from 'containers/LoginView'
import Header from './Header'
import CusMenu from './CusMenu'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  backHome() {
    Render.render(<LoginView />)
  }

  render() {
    const mainStyle = {
      position: 'absolute',
      top: 20,
      left: 0,
      right: 0,
      bottom: 0,
      //backgroundColor: '#cbacba'
    }
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <CusMenu />
          {
            /*
            <div style={mainStyle}>
              <RaisedButton label="HOME" onClick={this.backHome} />
            </div>
            */
          }
        </div>
      </MuiThemeProvider>
    )
  }
}
