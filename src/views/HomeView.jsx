import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LoginView from 'views/LoginView'
import { redirect } from 'utils/Render'
import Header from 'components/Header'
import AppMenu from 'components/AppMenu'
import Search from 'components/Search'
import SongList from 'components/SongList'
import Wrapper from 'components/Wrapper'

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
      display: 'inline-flex',
      height: '100%'
    }
    const searchStyle = {
      width: 200,
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10
    }

    let children = (
      <div>
        <Search data={data} style={searchStyle} onChange={keywordChange} callback={songList} />
        <SongList onPageChanged={songList} data={data} />
      </div>
    )
    return (
      <MuiThemeProvider>
        <div style={style}>
          <div className="leftMenu">
            <AppMenu />
          </div>
          <div className="mainBody">
            <div>
              <Wrapper children={children} />
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
