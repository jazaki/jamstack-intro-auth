import React from 'react'
import { Link } from 'gatsby'
import { useIdentityContext } from 'react-netlify-identity'

function Profile({ showModal }) {
  const identity = useIdentityContext()
  const isLoggedIn = identity && identity.isLoggedIn
  const name = identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.full_name
  return (
    isLoggedIn && (
      <div className="dashboard-header">
        <nav>
          <Link
            to="/dashboard/secret"
            activeClassName="active"
          >
            Secret Stuff
          </Link>
          <Link
            to="/dashboard/base"
            activeClassName="active"
          >
            See your base
          </Link>
        </nav>
        <span onClick={ showModal }>
          Logged in as {name}
          <button>
            Logout
          </button>
        </span>
      </div>
    )
  )
}

export default Profile
