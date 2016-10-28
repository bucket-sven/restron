const electron = window.require('electron')
const {dialog} = electron.remote
//const merge = window.require('merge')

let MessageBox = {
  info: function(options = {}, cb) {
    let opt = {
      type: 'info',
      buttons: ['确定'],
      title: '登录',
      message: options.message,
      defaultId: 0,
      cancelId: 0
    }
    dialog.showMessageBox(opt, (res) => {
      if(cb) {
        cb(res)
      }
    })
  }
}

export default MessageBox
