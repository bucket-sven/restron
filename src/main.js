const electron = require('electron')
const {app, BrowserWindow, ipcMain} = electron

let mainWindow = null

let env = process.env.NODE_ENV || 'production'

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

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
