import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { ListOfCategories } from '../components/ListOfCategories'
import { Loader } from '../components/Loader'

const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      id
      cover
      path
      emoji
    }
  }
`

export const GetListOfCategories = () => {
  const { data, loading, error } = useQuery(GET_CATEGORIES)

  if (loading) return <Loader />
  if (error) return <p>An error has ocurred. Try Again!</p>

  return <ListOfCategories categories={data.categories} />
}
