import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

export const IconFavoriteBorder = styled(MdFavoriteBorder)`
  color: lightcoral;
`

export const IconFavorite = styled(MdFavorite)`
  color: lightcoral;
`

export const Article = styled.article`
  min-height: 200px;
`

export const ImgWrapper = styled.div`
  border-radius: 6px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
`

export const Image = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;

  ${fadeIn()}
`

export const Button = styled.button`
  padding-top: 8px;
  display: flex;
  align-items: center;

  & svg {
    margin-right: 4px;
  }

  &:hover {
    cursor: pointer;
  }
`
