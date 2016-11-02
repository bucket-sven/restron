import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import LoginView from 'containers/LoginView'
import { render }from 'utils/Render'

injectTapEventPlugin() // listen on touch events
render(<LoginView />)
