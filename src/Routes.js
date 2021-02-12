import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'
import NotFound from './containers/NotFound'

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}
// Switch is a react router component which renders the first matching route that is defined within it. exact ensures match is exactly '/' otherwises it will recognize any path with "/" attached.