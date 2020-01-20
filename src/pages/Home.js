import React from 'react'
import { Helmet } from 'react-helmet'

import { GetPhotos } from '../containers/GetPhotos'
import { GetListOfCategories } from '../containers/GetListOfCategories'

export const Home = ({ id }) => (
  <>
    <Helmet>
      <title>Petgram | See your favorite pet photos</title>
      <meta name="description" content="App to view your favorite pet photos" />
    </Helmet>
    <GetListOfCategories />
    <GetPhotos categoryId={id} />
  </>
)
