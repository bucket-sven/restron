import React, { Component, PropTypes } from 'react'
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
    // key为SubMenu的key值, value为Menu.Item的key值
    return {
      'songList': ['home'],
      'authorize': ['modify-passwd']
    }
  }

  getRouteSubKey(path) {
    let keys = []
    for(var subKey in this.routeHash()) {
      if(this.routeHash()[subKey].includes(path)) {
        keys.push(subKey)
        break
      }
    }
    return keys
  }

  render() {
    let path = window.location.hash.substr(2)
    let keys = this.getRouteSubKey(path)
    return (
      <div>
        <img src={require("assets/img/logo.png")} width="50" id="logo" />
        <Menu
          className="appMenu"
          onClick={this.handleClick.bind(this)}
          mode="inline"
          theme="dark"
          defaultSelectedKeys={[path]}
          defaultOpenKeys={keys}
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

AppMenu.propTypes = {
  onClick: PropTypes.func
}
