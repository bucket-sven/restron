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

  handleSearch(data) {
    console.log(data);
    if (data && data.result) {
      this.setState({
        songs: data.result.songs || [],
        total: data.result.songCount
      })
    } else {
      this.setState({
        songs: []
      })
    }
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
    let { songList, data, keyword, keywordChange } = this.props
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
          <div>
            <div style={{display: 'inline-flex'}}>
              <Search style={searchStyle} defaultValue={keyword} onChange={keywordChange} callback={songList} />
              <a href="#/" style={{marginLeft: 10, paddingTop: 10}}>Login</a>
            </div>
            <div>
              <SongList songs={data.songs} total={data.songCount} />
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

HomeView.defaultProps = {
  songs: []
}
