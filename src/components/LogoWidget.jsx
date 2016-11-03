import React from 'react'

export default class LogoView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <img style={styles.icon} src="../public/img/app-logo.jpg"/>
    )
  }
}

const styles = {
  icon: {
    width: 100,
    height: 100,
    marginBottom: 40
  }
}
