import React, { Component } from 'react'
import Menu from 'antd/lib/menu'
import Icon from 'antd/lib/icon'
import { Link } from 'react-router'
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
          defaultOpenKeys={['songList']}
          >
          <Menu.Item>
            <Link to="/">登录</Link>
          </Menu.Item>
          <SubMenu title={<span><Icon type="appstore"/><span>歌单</span></span>} key='songList'>
            <Menu.Item key='home'>
              <Link to="/home">首页</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
