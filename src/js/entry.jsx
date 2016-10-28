import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import LoginView from './login_view.jsx'
import Render from './render.jsx'

injectTapEventPlugin() // listen on touch events
Render.render(<LoginView />)
