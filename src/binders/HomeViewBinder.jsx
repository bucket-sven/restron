import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomeView from 'views/HomeView'
import * as HomeViewActions from 'actions/SearchActions'

function mapStateToProps(state) {
  return {
    //songList 为绑定的reducer名称, 即页面中state下的名称，songs为组件中使用的名称
    songs: state.songList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeViewActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
