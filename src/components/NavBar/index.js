import React from 'react'
import { MdFavoriteBorder, MdHome, MdPersonOutline } from 'react-icons/md'

import { Nav, Link } from './styles'

const BUTTON_SIZE = '32px'

export const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <MdHome size={BUTTON_SIZE} />
      </Link>
      <Link to="/favs">
        <MdFavoriteBorder size={BUTTON_SIZE} />
      </Link>
      <Link to="/user">
        <MdPersonOutline size={BUTTON_SIZE} />
      </Link>
    </Nav>
  )
}
