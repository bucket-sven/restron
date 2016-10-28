const electron = require('electron')
const {app, BrowserWindow, ipcMain} = electron
const Tray = electron.Tray
const path = require('path');

let mainWindow = null
let appIcon;

let env = process.env.NODE_ENV || 'production'

app.on('ready', function() {
  let iconPath = path.join(__dirname, "/../public/img/tray.icns")
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
