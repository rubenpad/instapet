import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'
import { Title, Form, Input, Button } from './styles'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input type="email" placeholder="Email" {...email} required />
        <Input type="password" placeholder="Password" {...password} required />
        <Button type="submit">{title}</Button>
      </Form>
    </>
  )
}
