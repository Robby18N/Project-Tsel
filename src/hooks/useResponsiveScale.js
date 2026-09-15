import { useEffect, useRef, useState } from 'react'

/**
 * Scales a fixed-size design canvas down to fit the width of its
 * container, recalculating on window resize. Never scales up past 1x
 * so the canvas never looks blurry/oversized on very wide screens.
 */
export function useResponsiveScale(designWidth) {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      const width = containerRef.current?.clientWidth ?? window.innerWidth
      setScale(Math.min(width / designWidth, 1))
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [designWidth])

  return { containerRef, scale }
}
