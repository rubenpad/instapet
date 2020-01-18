import { useState, useEffect } from 'react'

export function useIntersectionObserver(ref) {
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(entries => {
        const { isIntersecting } = entries[0]

        if (isIntersecting) {
          setShouldShow(true)
          observer.disconnect()
        }
      })

      observer.observe(ref.current)
    })
  }, [ref])

  return shouldShow
}
