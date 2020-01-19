import React from 'react'
import { Spinner } from './styles'

export const Loader = () => (
  <Spinner>
    <div className="bounce1" />
    <div className="bounce2" />
    <div className="bounce3" />
  </Spinner>
)
