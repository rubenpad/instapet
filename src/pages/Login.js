import React, { useContext } from 'react'
import { Link } from '@reach/router'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { Context } from '../Context'
import { Action } from './styles'
import { UserForm } from '../components/UserForm'

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`

export const Login = () => {
  const [signin, { loading, error }] = useMutation(LOGIN)
  const { activateAuth } = useContext(Context)

  const onSubmit = async ({ email, password }) => {
    const variables = { input: { email, password } }

    const {
      data: { login }
    } = await signin({ variables })
    activateAuth(login)
  }

  const errorMsg = error && 'The user or password is incorrect!'

  return (
    <>
      <UserForm
        error={errorMsg}
        disabled={loading}
        onSubmit={onSubmit}
        title="Log in"
      />
      <Action>
        <span>Don&#39;t have an account?</span>
        <Link to="/user/signup">Sign up</Link>
      </Action>
    </>
  )
}
