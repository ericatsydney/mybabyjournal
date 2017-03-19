import React, { Component, PropTypes } from 'react'
import NavMenu from './NavigationMenu'

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <NavMenu/>
        </div>
      </nav>);
  }
}

export default Header;
