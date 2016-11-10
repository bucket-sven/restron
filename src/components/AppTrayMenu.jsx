import React, { Component } from 'react'
import { Menu } from 'electron'

const AppTrayMenu = Menu.buildFromTemplate([
  {
    label: '退出',
    role: 'close',
    //type: 'radio',
    //checked: true
  },
])

//this.appIcon.setToolTip('This is my application');
export default AppTrayMenu
