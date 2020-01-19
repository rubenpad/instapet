import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { PhotoCard } from '../components/PhotoCard'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const PhotoCardWithQuery = id => {
  const { data, loading, error } = useQuery(GET_SINGLE_PHOTO, { variables: id })

  if (error) return <p>An error has ocurred</p>

  if (loading) return <p>Loading...</p>

  return <PhotoCard {...data.photo} />
}
