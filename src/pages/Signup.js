import React from 'react'
import { Link } from '@reach/router'
import Context from '../Context'

import { Action } from './styles'
import { UserForm } from '../components/UserForm'

export const Signup = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <>
          <UserForm onSubmit={activateAuth} title="Sign up" />
          <Action>
            <span>Have an account?</span>
            <Link to="/signin">Sign in</Link>
          </Action>
        </>
      )
    }}
  </Context.Consumer>
)
