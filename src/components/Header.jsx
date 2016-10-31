import React from 'react'
import {blue500, red500, greenA200} from 'material-ui/styles/colors'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import MessageBox from '../utils/MessageBox'
const { ipcRenderer } = require('electron')

const iconStyles = {
  marginRight: 24,
  width: 10,
  height: 10
  //WebkitAppRegion: 'no-drag'
}

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const styles = {
      height: 20,
      position: 'absolute',
      backgroundColor: '#fedcba',
      left: 0,
      right: 0,
      top: 0
    }
    /*
    <header className="tabbar">
      <a id="close"    href="javascript: void(0)" onClick={this.closeWindow}></a>
      <a id="maximize" href="javascript: void(0)" onClick={this.maxiWindow}></a>
      <a id="minimize" href="javascript: void(0)" onClick={this.miniWindow}></a>
    </header>
    */
    return (
      <div></div>
    )
  }

  miniWindow() {
    ipcRenderer.send('minimize-app')
  }

  maxiWindow() {
    ipcRenderer.send('maximize-app')
  }

  closeWindow() {
    MessageBox.confirm({
      title: '确认关闭',
      message: '您确认要关闭吗?'
    }, (res) => {
      if (res == 1)
        ipcRenderer.send('close-app', 'all')
    })
  }
}
