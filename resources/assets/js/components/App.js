import React, { Component } from 'react'
import { Link } from 'react-router'

class App extends Component {

  render() {
    return (
      <div>
        <h1><Link to="/">Laravel + React example app</Link></h1>

        {this.props.children}
      </div>
    )
  }

}

export default App
