import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Loader } from '../components/Loader'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const GetFavorites = () => {
  const { data, loading, error } = useQuery(GET_FAVS, {
    fetchPolicy: 'network-only'
  })

  if (loading) return <Loader />
  if (error) return <p>{error.message}</p>

  const { favs } = data

  if (favs.length === 0) return <p>You don&#39;t have favorites</p>

  return <ListOfPhotoCards photos={favs} />
}
