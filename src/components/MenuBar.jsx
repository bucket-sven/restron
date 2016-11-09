const { Menu } = require('electron')

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
    label: '视图',
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
        role: 'close',
        accelerator: 'CmdOrCtrl+W',
        label: '关闭窗口'
      },
      {
        role: 'togglefullscreen',
        label: '最大化'
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

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
export { Menu as MenuBar }
