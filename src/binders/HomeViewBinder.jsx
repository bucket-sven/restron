import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomeView from 'views/HomeView'
import * as HomeViewActions from 'actions/HomeActions'

function mapStateToProps(state) {
  return {
    //songList 为绑定的reducer名称, 即页面中state下的名称，data为组件中使用的名称
    data: state.songList,
    keyword: state.keyword
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeViewActions, dispatch)
}

/*
export default connect(state => ({
  data: state.songList,
  keyword: state.keyword
}), dispatch => ({
  actions: bindActionCreators(HomeViewActions, dispatch)
}))(HomeView)
*/
export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
