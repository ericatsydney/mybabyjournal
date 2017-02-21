import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/app/App'
import Profiles from './components/profile/Profiles'
import ProfileEdit from './components/profile/ProfileEdit'
import Profile from './components/moment/Profile'
import NoMatch from './components/app/NoMatch'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/profiles" component={Profiles} />
      <Route path="/profiles/:profileId/edit" component={ProfileEdit} />
      <Route path="/profiles/:profileId" component={Profile} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('app'))
