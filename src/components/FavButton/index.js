import React from 'react'
import PropTypes from 'prop-types'

import { IconFavoriteBorder, IconFavorite, Button } from './styles'

export const FavButton = ({ likes, liked, onClick }) => {
  const Icon = liked ? IconFavorite : IconFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size="32px" />
      {likes}
      {' Likes'}
    </Button>
  )
}

FavButton.propTypes = {
  likes: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  onClick: PropTypes.func
}
