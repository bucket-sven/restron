import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomeLayout from 'views/layouts/HomeLayout'
import * as HomeLayoutActions from 'actions/HomeLayoutActions'

function mapStateToProps(state) {
  return {
    selectedKey: state.clickMenu
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeLayoutActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout)
