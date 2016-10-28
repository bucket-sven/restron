import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import {blue500, red500, greenA200} from 'material-ui/styles/colors'

const iconStyles = {
  marginRight: 24
}

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <FontIcon
          className="muidocs-icon-action-home"
          style={iconStyles}
          />
      </div>
    )
  }
}
