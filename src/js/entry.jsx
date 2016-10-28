import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import LoginView from '../components/login_view.jsx'
import Render from '../utils/render.jsx'

injectTapEventPlugin() // listen on touch events
Render.render(<LoginView />)
