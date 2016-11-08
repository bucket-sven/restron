import React, { Component, PropTypes } from 'react';
import Menu from 'antd/lib/menu'
import Icon from 'antd/lib/icon'
import { Link } from 'react-router'

const SubMenu = Menu.SubMenu
export default class Wrapper extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="rightWrap">
        <Menu mode="horizontal">
          <SubMenu title={<span><Icon type="user" />Username</span>}>
            <Menu.Item key="setting:1">
              <Link to="#/">Sign out</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
        <div className="right-box">
          {this.props.children}
        </div>
      </div>
    )
  }
}
