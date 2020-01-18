import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { Category } from '../Category'
import { List, Item } from './styles'

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

export const ListOfCategories = () => {
  const { data, loading, error } = useQuery(GET_CATEGORIES)

  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 180
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  if (error) return <p>{error}</p>

  if (loading) return <p>Loading...</p>

  return (
    <List fixed={showFixed}>
      {data.categories.length > 0 &&
        data.categories.map(category => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))}
    </List>
  )
}
