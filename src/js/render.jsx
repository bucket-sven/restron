import ReactDOM from 'react-dom';

let Render = {
  render: function(dom) {
    ReactDOM.render(
      dom,
      document.getElementById('app')
    )
  }
}

export default Render;
