import { useResponsiveScale } from '../../hooks/useResponsiveScale'

const DESIGN_WIDTH = 1920
const DESIGN_HEIGHT = 1468

/**
 * Wraps the fixed-size dashboard canvas and scales it down to fit
 * whatever width it's given (e.g. a 1440px viewport), so the pixel-
 * perfect design never overflows or requires horizontal scrolling.
 */
export function ScaledCanvas({ children }) {
  const { containerRef, scale } = useResponsiveScale(DESIGN_WIDTH)

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: DESIGN_HEIGHT * scale, overflow: 'hidden' }}
    >
      <div
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  )
}
