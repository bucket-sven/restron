const { Menu } = require('electron')

let NODE_ENV = process.env.NODE_ENV

const template = [
  {
    label: '编辑',
    submenu: [
      {
        role: 'undo',
        accelerator: 'CmdOrCtrl+Z',
        label: '撤消'
      },
      {
        role: 'redo',
        accelerator: 'CmdOrCtrl+Y',
        label: '重做'
      },
      {
        role: 'cut',
        accelerator: 'CmdOrCtrl+X',
        label: '剪切'
      },
      {
        role: 'copy',
        accelerator: 'CmdOrCtrl+C',
        label: '复制'
      }
    ]
  },
  {
    role: 'window',
    label: '窗口',
    submenu: [
      {
        role: 'minimize',
        accelerator: 'CmdOrCtrl+M',
        label: '最小化'
      },
      {
        role: 'togglefullscreen',
        accelerator: 'CmdOrCtrl+Alt+M',
        label: '最大化'
      },
      {
        role: 'close',
        accelerator: 'CmdOrCtrl+W',
        label: '关闭'
      }
    ]
  },
  {
    role: 'help',
    label: '帮助',
    submenu: [
      {
        label: '更多',
        click() {
          require('electron').shell.openExternal('http://electron.atom.io')
        }
      }
    ]
  }
]

if (NODE_ENV === 'development') {
  let devTool = {
    label: '开发者工具',
    submenu: [
      {
        label: '重载',
        accelerator: 'CmdOrCtrl+R',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload()
        }
      },
      {
        label: '开发工具切换',
        //accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Control+Shift+I',
        accelerator: 'CmdOrCtrl+T',
        click(item, focusedWindow) {
          if(focusedWindow) focusedWindow.webContents.toggleDevTools()
        }
      }
    ]
  }
  template.splice(template.length - 1, 0, devTool)
}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
export { Menu as MenuBar }
