import React, { Component } from 'react'
import Menu from 'antd/lib/menu'
const SubMenu = Menu.SubMenu

export default class CusMenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Menu
        style={{width:240}}
        mode="inline"
        >
        <Menu.Item>我的信息</Menu.Item>
        <SubMenu title="歌单">
          <Menu.Item>歌单一</Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}
