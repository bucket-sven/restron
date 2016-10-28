import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import LoginView from '../containers/LoginView.jsx'
import Render from '../utils/Render.jsx'

injectTapEventPlugin() // listen on touch events
Render.render(<LoginView />)
