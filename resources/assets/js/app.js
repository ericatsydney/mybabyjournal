import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App'
import Profiles from './components/Profiles'
import Profile from './components/Profile'
import ProfileEdit from './components/ProfileEdit'
import Moments from './components/Moments'
import Moment from './components/Moment'
import MomentEdit from './components/MomentEdit'
import NoMatch from './components/NoMatch'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/profiles" component={Profiles} />
      <Route path="/profiles/:profileId" component={Profile} />
      <Route path="/profiles/:profileId/edit" component={ProfileEdit} />
      <Route path="/moments" component={Moments} />
      <Route path="/moments/:momentId" component={Moment} />
      <Route path="/moments/:momentId/edit" component={MomentEdit} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('app'))
