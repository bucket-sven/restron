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
      password: '',
      passwordConfirmation: ''
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
          value={this.state.passwordConfirmation}
          onChange={(event) => {this.setState({passwordConfirmation: event.target.value})}}
          />

        <div style={styles.buttonsContainer}>
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
    //render(<LoginView />)
    redirect('#/')
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
