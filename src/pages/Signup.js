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
  const [signup, { loading, error }] = useMutation(SIGN_UP)

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

        const errorMsg =
          error && 'The user already exists or an error has occurred'

        return (
          <>
            <UserForm
              error={errorMsg}
              disabled={loading}
              onSubmit={onSubmit}
              title="Sign up"
            />
            <Action>
              <span>Have an account?</span>
              <Link to="/user/signin">Sign in</Link>
            </Action>
          </>
        )
      }}
    </Context.Consumer>
  )
}
