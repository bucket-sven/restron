import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { render }from 'utils/Render'
import App from 'containers/App'

injectTapEventPlugin() // listen on touch events
//render(<LoginView />)
render(<App />)
