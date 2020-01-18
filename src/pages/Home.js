import React from 'react'

import { PhotoCards } from '../containers/PhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'

export const Home = ({ id }) => (
  <>
    <ListOfCategories />
    <PhotoCards categoryId={id} />
  </>
)
