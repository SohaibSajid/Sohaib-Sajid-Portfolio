import { useEffect, useRef, useState } from 'react'

export function useDepth(sectionIds) {
  const [active, setActive] = useState(sectionIds[0])
  const refs = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        refs.current[id] = el
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
