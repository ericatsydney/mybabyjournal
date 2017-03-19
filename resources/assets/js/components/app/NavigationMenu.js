import React, { Component } from 'react'
import { Link } from 'react-router'

class NavMenu extends Component {
  render() {
    return (
      <div className="nav-menu">
        <Link className="brand-logo" to="#">My Baby Journal</Link>
        <Link to="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/profiles">Profiles</Link>
          </li>
          <li>
            <Link to="/moments">Albums</Link>
          </li>
        </ul>

        <ul className="side-nav" id="mobile-demo">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">Javascript</a></li>
          <li><a href="mobile.html">Mobile</a></li>
        </ul>
      </div>
    )
  }

}

export default NavMenu 
