import React from 'react'
import { Helmet } from 'react-helmet'

import { GetFavorites } from '../containers/GetFavorites'
import { Title } from './styles'

export default () => {
  return (
    <>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <Title>Favorites</Title>
      <GetFavorites />
    </>
  )
}
