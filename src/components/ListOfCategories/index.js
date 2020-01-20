import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = ({ categories }) => {
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 180
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  return (
    <List fixed={showFixed}>
      {categories.length > 0 &&
        categories.map(category => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))}
    </List>
  )
}

ListOfCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired
}
