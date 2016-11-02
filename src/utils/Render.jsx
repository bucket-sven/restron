import ReactDOM from 'react-dom';

let Render = {
  render: function(dom) {
    ReactDOM.render(
      dom,
      document.getElementById('app')
    )
  }
}

let render = Render.render

export { Render as default, render }
