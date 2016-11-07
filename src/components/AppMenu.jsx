import React, { Component } from 'react'
import Menu from 'antd/lib/menu'
const SubMenu = Menu.SubMenu

export default class AppMenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Menu
        style={{width:240}}
        mode="inline"
        >
        <Menu.Item>
          <a href='#/'>登录</a>
        </Menu.Item>
        <SubMenu title="歌单">
          <Menu.Item>
            <a href='#/home'>首页</a>
          </Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}
