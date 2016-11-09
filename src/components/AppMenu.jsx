import React, { Component } from 'react'
import Menu from 'antd/lib/menu'
import Icon from 'antd/lib/icon'
import { Link } from 'react-router'
const SubMenu = Menu.SubMenu

export default class AppMenu extends Component {
  constructor(props) {
    super(props)
  }

  handleClick(e) {
    let onClick = this.props.onClick
    if(onClick) {
      onClick(e.key)
    }
  }

  routeHash() {
    return {
      '#/home': {
        openKey: 'songList',
        selectedKey: 'home'
      },
      '#/modify-passwd': {
        openKey: 'authorize',
        selectedKey: 'modify-passwd'
      }
    }
  }

  render() {
    let path = window.location.hash
    let keys = this.routeHash()[path]
    return (
      <div>
        <img src={require("assets/img/logo.png")} width="50" id="logo" />
        <Menu
          className="appMenu"
          onClick={this.handleClick.bind(this)}
          mode="inline"
          theme="dark"
          defaultSelectedKeys={[keys.selectedKey]}
          defaultOpenKeys={[keys.openKey]}
          >
          <SubMenu title={<span><Icon type="appstore"/><span>歌单</span></span>} key='songList'>
            <Menu.Item key='home'>
              <Link to="/home">首页</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu title={<span><Icon type="mail"/><span>认证</span></span>} key='authorize'>
            <Menu.Item key='modify-passwd'>
              <Link to="/modify-passwd">修改密码</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
