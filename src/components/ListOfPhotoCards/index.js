import React from 'react'
import PropTypes from 'prop-types'

import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = ({ photos }) => {
  return (
    <ul>
      {photos.map(photo => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}

ListOfPhotoCards.propTypes = {
  photos: PropTypes.array.isRequired
}
