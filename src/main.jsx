const electron = require('electron')
const {app, Menu, BrowserWindow, ipcMain} = electron
const Tray = electron.Tray
const path = require('path');

require('assets/css/header')
require('assets/css/style')

import "antd/dist/antd.css"
import "animate.css/animate.min.css"

let env = process.env.NODE_ENV || 'production'

class Main {

  constructor() {
    this.iconPath = path.join(__dirname, "/../public/img/guitar25.png");
    this.initApp()
  }

  initApp() {
    let self = this
    app.on('ready', function() {
      self.mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        //transparent: true,
        //frame: false,
        icon: self.iconPath
      })

      self.buildAppIcon()

      self.mainWindow.loadURL('file://' + __dirname + '/index.html')

      if (env == 'development') {
        self.mainWindow.webContents.openDevTools()
      }

      self.mainWindow.on('closed', () => {
        self.mainWindow = null
      })
      self.initEvents()
    })
  }

  buildAppIcon() {
    if (process.platform === 'darwin') {
      app.dock.setIcon(this.iconPath)
      this.appIcon = new Tray(path.join(__dirname, '/../public/img/tray.png'))
    } else {
      this.appIcon = new Tray(this.iconPath);
    }
    const contextMenu = Menu.buildFromTemplate([
      {label: 'show', type: 'radio'},
      {label: 'minimize', type: 'radio'},
      {label: 'click', type: 'radio', checked: true},
    ])
    //this.appIcon.setToolTip('This is my application');
    this.appIcon.setContextMenu(contextMenu)
    // appIcon.on('click', () => {
    //   mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
    // })
  }

  initEvents() {
    app.on('window-all-closed', () => {
      if(process.platform === 'darwin') {
        app.dock.hide()
      } else {
        app.quit()
      }
    })

    /*
    ipcMain.on('minimize-app', (event, arg) => {
      mainWindow.minimize()
    })

    ipcMain.on('maximize-app', (event, arg) => {
      mainWindow.maximize()
    })

    ipcMain.on('close-app', (event, arg) => {
      app.quit()
    })
    */
  }
}

new Main()
