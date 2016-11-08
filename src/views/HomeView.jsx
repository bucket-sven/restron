import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import HomeLayout from 'views/layouts/HomeLayout'
import LoginView from 'views/LoginView'
import { redirect } from 'utils/Render'
import Header from 'components/Header'
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
    const searchStyle = {
      width: 200,
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10
    }

    return (
      <div>
        <Search placeholder="请输入关键字" data={data} style={searchStyle} onChange={keywordChange} callback={songList} />
        <SongList onPageChanged={songList} data={data} />
      </div>
    )
  }
}

HomeView.propTypes = {
  data: PropTypes.object.isRequired,
  songList: PropTypes.func.isRequired
}
