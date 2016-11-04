import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LoginView from 'containers/LoginView'
import { redirect } from 'utils/Render'
import Header from 'components/Header'
import AppMenu from 'components/AppMenu'
import Search from 'components/Search'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  backLogin() {
    redirect("#/login")
  }

  render() {
    /*
    const mainStyle = {
      position: 'absolute',
      top: 20,
      left: 0,
      right: 0,
      bottom: 0,
      //backgroundColor: '#cbacba'
    }
    */
    const style = {
      flexDirection: 'row',
      flex: 1,
      display: 'inline-flex'
    }
    const searchStyle = {
      width: 200,
      marginLeft: 10,
      marginTop: 10
    }
    return (
      <MuiThemeProvider>
        <div style={style}>
          <Header />
          <AppMenu />
          <div style={{}}>
            <Search style={searchStyle}/>
          </div>
          <a href="#/">Login</a>
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
