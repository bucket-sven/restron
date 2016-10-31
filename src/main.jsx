const electron = require('electron')
const {app, Menu, BrowserWindow, ipcMain} = electron
const Tray = electron.Tray
const path = require('path');

require('./css/header.css')
require('./css/style.css')

let mainWindow = null
let appIcon;
let maximized = false;

let env = process.env.NODE_ENV || 'production'
let iconPath = path.join(__dirname, "/../public/img/guitar25.png")

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    //transparent: true,
    //frame: false,
    icon: iconPath
  })

  buildAppIcon()

  mainWindow.loadURL('file://' + __dirname + '/html/index.html')

  if (env == 'development') {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})

function buildAppIcon() {
  appIcon = new Tray(iconPath);
  const contextMenu = Menu.buildFromTemplate([
    {label: 'show', type: 'radio'},
    {label: 'minimize', type: 'radio'},
    {label: 'click', type: 'radio', checked: true},
  ])
  appIcon.setToolTip('This is my application');
  appIcon.setContextMenu(contextMenu)
  // appIcon.on('click', () => {
  //   mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
  // })
}

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
