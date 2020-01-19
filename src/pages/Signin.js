import React from 'react'
import { Link } from '@reach/router'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import Context from '../Context'
import { Action } from './styles'
import { UserForm } from '../components/UserForm'

const SIGN_IN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`

export const Signin = () => {
  const [signin, { loading, error }] = useMutation(SIGN_IN)

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          signin({
            variables: {
              input: {
                email,
                password
              }
            }
          }).then(activateAuth)
        }

        const errorMsg = error && 'The user or password is incorrect!'

        return (
          <>
            <UserForm
              error={errorMsg}
              disabled={loading}
              onSubmit={onSubmit}
              title="Sign in"
            />
            <Action>
              <span>Don&#39;t have an account?</span>
              <Link to="/user/signup">Sign up</Link>
            </Action>
          </>
        )
      }}
    </Context.Consumer>
  )
}
