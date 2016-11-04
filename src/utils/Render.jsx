import ReactDOM from 'react-dom';

let Render = {
  render: function(dom) {
    ReactDOM.render(
      dom,
      document.getElementById('app')
    )
  },
  redirect: function(path) {
    window.location.href = path
  }
}

let render   = Render.render
let redirect = Render.redirect

export { Render as default, render, redirect }
