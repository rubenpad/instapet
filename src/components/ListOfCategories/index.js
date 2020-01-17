import React, { useState, useEffect } from 'react'

import { useCategoriesData } from '../../hooks/useCategoriesData'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 180
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = fixed => (
    <List fixed={fixed}>
      {categories.length > 0 &&
        categories.map(category => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))}
    </List>
  )

  return <>{loading ? <h1>Loading...</h1> : renderList(showFixed)}</>
}
