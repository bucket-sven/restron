import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LoginView from 'views/LoginView'
import { redirect } from 'utils/Render'
import Header from 'components/Header'
import AppMenu from 'components/AppMenu'
import Search from 'components/Search'
import SongList from 'components/SongList'

export default class HomeView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
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
    let { songList, data, keywordChange } = this.props
    const style = {
      flexDirection: 'row',
      flex: 1,
      display: 'inline-flex'
    }
    const searchStyle = {
      width: 200,
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10
    }

    return (
      <MuiThemeProvider>
        <div style={style}>
          <Header />
          <AppMenu />
          <div style={{minWidth: 615}}>
            <div>
              <Search data={data} style={searchStyle} onChange={keywordChange} callback={songList} />
            </div>
            <div>
              <SongList onPageChanged={songList} data={data} />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

HomeView.propTypes = {
  data: PropTypes.object.isRequired,
  songList: PropTypes.func.isRequired
}
