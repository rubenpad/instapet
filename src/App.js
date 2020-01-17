import React from 'react'

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { ListOfCategories } from './components/ListOfCategories'

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
)
