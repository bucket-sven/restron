import React, { Component } from 'react'
import Menu from 'antd/lib/menu'
const SubMenu = Menu.SubMenu

export default class AppMenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <img src="../public/img/logo.png" width="50" id="logo" />
        <Menu
          className="appMenu"
          mode="inline"
          theme="dark"
          defaultSelectedKeys={['home']}
          openKeys={['songList']}
          >
          <Menu.Item>
            <a href='#/'>登录</a>
          </Menu.Item>
          <SubMenu title="歌单" key='songList'>
            <Menu.Item key='home'>
              <a href='#/home'>首页</a>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
