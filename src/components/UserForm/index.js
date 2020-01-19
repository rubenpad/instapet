import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'
import { Loader } from '../Loader'
import { Title, Form, Input, Button, StyledError } from './styles'

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          type="email"
          placeholder="Email"
          {...email}
          required
          disabled={disabled}
        />
        <Input
          type="password"
          placeholder="Password"
          {...password}
          required
          disabled={disabled}
        />
        {disabled && <Loader />}
        <StyledError>{error}</StyledError>
        <Button type="submit">{title}</Button>
      </Form>
    </>
  )
}
