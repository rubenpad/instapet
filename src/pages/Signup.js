import React from 'react'
import { Link } from '@reach/router'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

import Context from '../Context'
import { Action } from './styles'
import { UserForm } from '../components/UserForm'

const SIGN_UP = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`

export const Signup = () => {
  const [signup] = useMutation(SIGN_UP)

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          signup({
            variables: {
              input: {
                email,
                password
              }
            }
          }).then(activateAuth)
        }

        return (
          <>
            <UserForm onSubmit={onSubmit} title="Sign up" />
            <Action>
              <span>Have an account?</span>
              <Link to="/signin">Sign in</Link>
            </Action>
          </>
        )
      }}
    </Context.Consumer>
  )
}
