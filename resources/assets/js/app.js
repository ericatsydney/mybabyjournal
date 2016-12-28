import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App'
import Profiles from './components/Profiles'
import Profile from './components/Profile'
import Moments from './components/Moments'
import Moment from './components/Moment'
import NoMatch from './components/NoMatch'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/profiles" component={Profiles} />
      <Route path="/profiles/:profileId" component={Profile} />
      <Route path="/moments" component={Moments} />
      <Route path="/moments/:momentId" component={Moment} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('app'))
