import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import LoginView from 'containers/LoginView'
import Render from 'utils/Render'

injectTapEventPlugin() // listen on touch events
Render.render(<LoginView />)
