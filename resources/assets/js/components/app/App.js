import React, { Component } from 'react'
import { Link } from 'react-router'

class App extends Component {

  render() {
    return (
      <div className="col-xs-12">
        {this.props.children}
      </div>
    )
  }

}

export default App
