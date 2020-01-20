import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Loader } from '../components/Loader'

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

export const GetPhotos = ({ categoryId }) => {
  const { data, loading, error } = useQuery(GET_PHOTOS, {
    variables: { categoryId }
  })

  if (error) return <p>An error has ocurred. Try again!</p>

  if (loading) return <Loader />

  const { photos } = data

  return <ListOfPhotoCards photos={photos} />
}

GetPhotos.propTypes = { categoryId: PropTypes.string }
