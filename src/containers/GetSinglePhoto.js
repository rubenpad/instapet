import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { PhotoCard } from '../components/PhotoCard'
import { Loader } from '../components/Loader'

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

export const GetSinglePhoto = id => {
  const { data, loading, error } = useQuery(GET_SINGLE_PHOTO, { variables: id })

  if (loading) return <Loader />
  if (error) return <p>An error has ocurred</p>

  return <PhotoCard {...data.photo} />
}

GetSinglePhoto.propTypes = { id: PropTypes.string }
