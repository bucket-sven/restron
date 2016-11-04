import React from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import Home from 'containers/Home'
import { redirect } from 'utils/Render'
import MessageBox from 'utils/MessageBox'
import RegisterView from 'containers/RegisterView'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
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
        <div style={styles.buttons_container}>
          <RaisedButton
            label="登录"
            primary={true}
            onClick={this._handleLogin.bind(this)}
            />
          <RaisedButton
            label="注册"
            primary={false}
            style={{marginLeft: 60}}
            onClick={this._handleRegistry.bind(this)}
            />
        </div>
      </form>
    )
  }

  _handleRegistry() {
    redirect('#/register')
  }
  _handleLogin() {
    redirect('#/home')
    //Render.render(<Home />)
    // MessageBox.info({
    //   message: 'Test'
    // }, (res) => {
    //   Render.render(<Home />)
    // })
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
