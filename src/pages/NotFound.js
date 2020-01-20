import React from 'react'
import { Helmet } from 'react-helmet'

import { Title, Link } from './styles'

export default () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Helmet>
        <title>404 | Not Found</title>
      </Helmet>
      <Title>Page Not Found</Title>
      <Link to="/">Go to Home</Link>
    </div>
  )
}
