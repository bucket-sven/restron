import React, { Component, PropTypes } from 'react';
import Form from 'antd/lib/form'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'
import Icon from 'antd/lib/icon'

let FormItem = Form.Item

export default class PasswordForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="loginForm">
        <FormItem>
          <Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />
        </FormItem>
        <FormItem>
          <Input addonBefore={<Icon type="lock" />} type="password" placeholder="确认密码" />
        </FormItem>
        <Button type="primary" htmlType="submit" className="login-form-button">确认</Button>
      </Form>
    )
  }
}
