import React from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import Home from 'containers/Home'
import LoginView from 'containers/LoginView'
import Render from 'utils/Render'
import MessageBox from 'utils/MessageBox'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      password_confirmation: ''
    }
  }

  render() {
    return (
      <form style={styles.root} >
        <TextField
          hintText="请输入用户名"
          value={this.state.username}
          onChange={(event) => {this.setState({username: event.target.value})}}
          />

        <TextField
          hintText="请输入密码"
          type="password"
          value={this.state.password}
          onChange={(event) => {this.setState({password: event.target.value})}}
          />

        <TextField
          hintText="请再次输入密码"
          type="password"
          value={this.state.password_confirmation}
          onChange={(event) => {this.setState({password_confirmation: event.target.value})}}
          />

        <div style={styles.buttons_container}>
          <RaisedButton
            label="确定"
            primary={true}
            onClick={this._handleRegistry.bind(this)}
            />
          <RaisedButton
            label="返回"
            primary={false}
            style={{marginLeft: 60}}
            onClick={this._handleCancel.bind(this)}
            />
        </div>
      </form>
    )
  }

  _handleRegistry() {}
  _handleCancel() {
    Render.render(<LoginView />)
  }
}

var styles = {
  buttons_container: {
    paddingTop: 30,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  root: {
    // position: 'absolute',
    // left: 0,
    // top: 0,
    // right: 0,
    // bottom: 0,
    display: 'flex',
    //flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
