const electron = require('electron')
const {app, BrowserWindow, ipcMain} = electron
const Tray = electron.Tray
const path = require('path');

require('./css/header.css')
require('./css/style.css')

let mainWindow = null
let appIcon;
let maximized = false;

let env = process.env.NODE_ENV || 'production'

app.on('ready', function() {
  let iconPath = path.join(__dirname, "/../public/img/tray.ico")
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    //transparent: true,
    frame: false,
    icon: iconPath
  })

  //appIcon = new Tray(iconPath);
  //appIcon.setToolTip('This is my application');

  mainWindow.loadURL('file://' + __dirname + '/html/index.html')

  if (env == 'development') {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('minimize-app', (event, arg) => {
  mainWindow.minimize()
})

ipcMain.on('maximize-app', (event, arg) => {
  mainWindow.maximize()
})

ipcMain.on('close-app', (event, arg) => {
  app.quit()
})
