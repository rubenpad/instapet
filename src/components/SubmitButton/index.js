import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './styles'

export const SubmitButton = ({ children, disabled, onClick }) => (
  <Button type="submit" disabled={disabled} onClick={onClick}>
    {children}
  </Button>
)

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}
