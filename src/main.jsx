const electron = require('electron')
const {app, Menu, BrowserWindow, ipcMain} = electron
const Tray = electron.Tray
const path = require('path')

require('assets/css/style.scss')

import "antd/dist/antd.css"
import "animate.css/animate.min.css"
import menu from 'components/MenuBar'
import AppTrayMenu from 'components/AppTrayMenu'

const env = process.env.NODE_ENV || 'production'
const indexHtml          = `file://${__dirname}/index.html`
const trayIconPath       = path.join(__dirname, '../public/img/logo.png')
const darwinTrayIconPath = path.join(__dirname, '../public/img/tray.png')

class Main {

  constructor() {
    this.initApp()
  }

  initApp() {
    const self = this
    app.on('ready', function() {
      self.mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        // transparent: true,
        // frame: false,
        icon: trayIconPath
      })

      self.buildAppTray()

      self.mainWindow.loadURL(indexHtml)

      if (env === 'development') {
        // self.mainWindow.webContents.openDevTools()
      }

      if (process.platform === 'darwin') {
        app.setApplicationMenu(menu)
      } else {
        Menu.setApplicationMenu(menu)
      }

      self.mainWindow.on('closed', () => {
        self.mainWindow = null
      })
      self.initEvents()
    })
  }

  buildAppTray() {
    if (process.platform === 'darwin') {
      this.appTray = new Tray(darwinTrayIconPath)
      app.dock.setIcon(trayIconPath)
    } else {
      this.appTray = new Tray(trayIconPath)
    }
    this.appTray.setContextMenu(AppTrayMenu)
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
