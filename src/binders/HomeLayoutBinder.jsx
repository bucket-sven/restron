import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomeLayout from 'views/layouts/HomeLayout'
import * as HomeLayoutActions from 'actions/HomeLayoutActions'

function mapStateToProps(state) {
  return {
    //songList 为绑定的reducer名称, 即页面中state下的名称，songs为组件中使用的名称
    selectedKey: state.clickMenu
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeLayoutActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout)
