import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const PhotoCards = ({ categoryId }) => {
  const { data, loading, error } = useQuery(GET_PHOTOS, {
    variables: { categoryId }
  })

  if (error) return <p>{error}</p>

  if (loading) return <p>Loading...</p>
  
  const { photos } = data

  return <ListOfPhotoCards photos={photos} />
}
