import React from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import { redirect } from 'utils/Render'
import MessageBox from 'utils/MessageBox'

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
        <div style={styles.buttonsContainer}>
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
    // MessageBox.info({
    //   message: 'Test'
    // }, (res) => {
    //   Render.render(<Home />)
    // })
  }
}

var styles = {
  buttonsContainer: {
    paddingTop: 30,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
