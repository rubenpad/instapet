import { useState, useEffect } from 'react'

export const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window
      .fetch('https://instapet-api.rubbenpad2.now.sh/categories')
      .then(response => response.json())
      .then(data => setCategories(data))

    setLoading(false)
  }, [])

  return { categories, loading }
}
