import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'

import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import { Title } from './styles'

export default () => {
  const { removeAuth } = useContext(Context)

  return (
    <>
      <Helmet>
        <title>Instapet | User</title>
      </Helmet>
      <Title>User</Title>
      <SubmitButton onClick={removeAuth}>Log out</SubmitButton>
    </>
  )
}
