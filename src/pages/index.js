import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

function Index() {
  return (
    <Layout>
      <h1>Hello World!</h1>
      <p>Log in to find out why</p>
      <Link to="/dashboard">Go to dashboard</Link>
    </Layout>
  )
}

export default Index
