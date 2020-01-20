import React, { useRef } from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useToggleLikePhoto } from '../../hooks/useToggleLikePhoto'
import { Article, ImgWrapper, Image } from './styles'
import { FavButton } from '../FavButton'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null)
  const shouldShow = useIntersectionObserver(ref)

  const { handleClick } = useToggleLikePhoto()

  return (
    <Article ref={ref}>
      {shouldShow && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Image src={src} />
            </ImgWrapper>
          </Link>
          <FavButton
            likes={likes}
            liked={liked}
            onClick={() => handleClick(id)}
          />
        </>
      )}
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired
}
