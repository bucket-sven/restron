import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomeView from 'views/HomeView'
import * as HomeViewActions from 'actions/SearchActions'

function mapStateToProps(state) {
  return {
    songs: state.songs,
    keyword: state.keyword
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeViewActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
