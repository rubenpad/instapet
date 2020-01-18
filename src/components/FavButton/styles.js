import styled from 'styled-components'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

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

export const IconFavoriteBorder = styled(MdFavoriteBorder)`
  color: lightcoral;
`

export const IconFavorite = styled(MdFavorite)`
  color: lightcoral;
`
