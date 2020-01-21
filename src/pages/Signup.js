import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from '@reach/router'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

import { Context } from '../Context'
import { Action } from './styles'
import { UserForm } from '../components/UserForm'

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`

export default () => {
  const [register, { loading, error }] = useMutation(REGISTER)
  const { activateAuth } = useContext(Context)

  const onSubmit = async ({ email, password }) => {
    const variables = { input: { email, password } }

    const {
      data: { signup }
    } = await register({ variables })

    activateAuth(signup)
  }

  const errorMsg = error && 'The user already exists or an error has occurred'

  return (
    <>
      <Helmet>
        <title>Instapet | Register</title>
      </Helmet>
      <UserForm
        error={errorMsg}
        disabled={loading}
        onSubmit={onSubmit}
        title="Register"
      />
      <Action>
        <span>Have an account?</span>
        <Link to="/user/login">Log in</Link>
      </Action>
    </>
  )
}
