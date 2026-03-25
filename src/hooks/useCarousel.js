import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

/* ----------------------------------
   Responsive items per view
-----------------------------------*/
function getItemsPerView(breakpoints) {
  const width = window.innerWidth

  if (width < 640) return breakpoints.mobile     // Mobile → 1
  if (width < 1024) return breakpoints.tablet   // Tablet → 2
  return breakpoints.desktop                    // Desktop → 3
}

/* ----------------------------------
   Main Hook
-----------------------------------*/
export function useCarousel(items = [], carouselConfig) {
  const totalItems = items.length

  const [index, setIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(() =>
    typeof window === 'undefined'
      ? carouselConfig.itemsPerView.desktop
      : getItemsPerView(carouselConfig.itemsPerView)
  )

  /* ----------------------------------
     Max index calculation
  -----------------------------------*/
  const maxIndex = useMemo(() => {
    return Math.max(0, totalItems - itemsPerView)
  }, [totalItems, itemsPerView])

  /* ----------------------------------
     Safe navigation
  -----------------------------------*/
  const goTo = useCallback(
    (nextIndex) => {
      setIndex(prev =>
        Math.min(Math.max(nextIndex, 0), maxIndex)
      )
    },
    [maxIndex]
  )

  const next = useCallback(() => {
    goTo(index + 1) // move 1 item
  }, [goTo, index])

  const prev = useCallback(() => {
    goTo(index - 1)
  }, [goTo, index])

  /* ----------------------------------
     Resize Handling (IMPORTANT FIX)
     Prevent invalid index after resize
  -----------------------------------*/
  useEffect(() => {
    const onResize = () => {
      const newItemsPerView = getItemsPerView(
        carouselConfig.itemsPerView
      )

      setItemsPerView(prev => {
        if (prev !== newItemsPerView) {
          setIndex(i =>
            Math.min(i, Math.max(0, totalItems - newItemsPerView))
          )
        }
        return newItemsPerView
      })
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [carouselConfig.itemsPerView, totalItems])

  /* ----------------------------------
     Touch Swipe
  -----------------------------------*/
  const touchHandlers = useCarouselTouch(next, prev)

  return {
    index,
    itemsPerView,
    maxIndex,
    goTo,
    next,
    prev,
    canNext: index < maxIndex,
    canPrev: index > 0,
    ...touchHandlers,
  }
}

/* ----------------------------------
   Touch Hook (Improved)
-----------------------------------*/
function useCarouselTouch(next, prev) {
  const startX = useRef(null)
  const threshold = 50

  const onTouchStart = useCallback((e) => {
    startX.current = e.touches[0].clientX
  }, [])

  const onTouchMove = useCallback((e) => {
    if (startX.current === null) return

    const currentX = e.touches[0].clientX
    const delta = currentX - startX.current

    if (delta > threshold) {
      prev()
      startX.current = null
    }

    if (delta < -threshold) {
      next()
      startX.current = null
    }
  }, [next, prev])

  const onTouchEnd = useCallback(() => {
    startX.current = null
  }, [])

  return { onTouchStart, onTouchMove, onTouchEnd }
}