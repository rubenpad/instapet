import React from 'react'
import { Link } from '@reach/router'
import Context from '../Context'

import { Action } from './styles'
import { UserForm } from '../components/UserForm'

export const Signin = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <>
          <UserForm onSubmit={activateAuth} title="Sign in" />
          <Action>
            <span>Don&#39;t have an account?</span>
            <Link to="/user">Sign up</Link>
          </Action>
        </>
      )
    }}
  </Context.Consumer>
)
