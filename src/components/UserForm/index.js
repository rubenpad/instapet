import React from 'react'
import PropTypes from 'prop-types'

import { useInputValue } from '../../hooks/useInputValue'
import { Loader } from '../Loader'
import { Title, Form, Input, StyledError } from './styles'
import { SubmitButton } from '../SubmitButton'

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
          name="email"
          type="email"
          placeholder="Email"
          {...email}
          required
          disabled={disabled}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          {...password}
          required
          disabled={disabled}
        />
        {disabled && <Loader />}
        <StyledError>{error}</StyledError>
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
    </>
  )
}

UserForm.propTypes = {
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func,
  title: PropTypes.string
}
