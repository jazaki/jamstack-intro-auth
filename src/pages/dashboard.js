import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router'
import { navigate } from 'gatsby'
import { IdentityModal } from 'react-netlify-identity-widget'

import Layout from '../components/layout'
import Profile from '../components/profile'
import PrivateRoute from '../components/private-routes'
import RouteBase from '../components/route-base'
import RouteSecret from '../components/route-secret'
import RouteLogin from '../components/route-login'

import 'react-netlify-identity-widget/styles.css'

function Dashboard({ location }) {
  const [isVisible, setVisibility] = useState(false)
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('/dashboard/login', { replace: true })
    }
  }, [])

  const showModal = (flag = true) => setVisibility(flag)

  return (
    <Layout>
      <Profile showModal={showModal} />
      <Router>
        <PrivateRoute path="/dashboard/base" component={RouteBase}/>
        <PrivateRoute path="/dashboard/secret" component={RouteSecret} />
        <PrivateRoute path="/dashboard/login" showModal={showModal} component={RouteLogin} />
      </Router>
      <IdentityModal
        showDialog={ isVisible }
        onCloseDialog={ () => showModal(false) }
      />
    </Layout>
  )
}

export default Dashboard
