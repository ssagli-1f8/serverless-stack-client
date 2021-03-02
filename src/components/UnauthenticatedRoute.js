import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAppContext } from '../libs/contextLib'

export default function UnauthenticatedRoute({ children, ...rest }) {
  const { isAuthenticated } = useAppContext()
  const redirect = querystring('redirect')

  function querystring(name, url = window.location.href) {
    // eslint-disable-next-line no-console
    console.log('name', name)
    // eslint-disable-next-line no-console
    console.log('url', url)
    name = name.replace(/[[]]/g, '\\$&')
  
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', 'i')
    const results = regex.exec(url)
  
    if (!results) {
      return null
    }
    if (!results[2]) {
      return ''
    }
  
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
  }

  return (
    <Route {...rest}>
      {!isAuthenticated ? (
        children
      ) : (
        <Redirect to={redirect === '' || redirect === null ? '/' : redirect} />
      )}
    </Route>
  )
}