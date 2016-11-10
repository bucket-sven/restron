import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

const defaultIsVisible = true
export default createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
               changePositionKey="Q"
               defaultIsVisible={defaultIsVisible}>
    <LogMonitor />
  </DockMonitor>
)
