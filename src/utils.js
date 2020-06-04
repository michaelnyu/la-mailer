import { useState } from "react"

const documentElementWithDefault =
  typeof document !== "undefined"
    ? document.documentElement
    : { clientWidth: 700, clientHeight: 800 }

const windowWithDefault =
  typeof window !== "undefined" ? window : { innerWidth: 700, innerHeight: 800 }

const MOBILE_BREAKPOINTS = { PORTRAIT: 568, LANDSCAPE: 820 }

export function useDeviceQueries() {
  function calculateViewWidth() {
    return Math.max(
      documentElementWithDefault.clientWidth,
      windowWithDefault.innerWidth
    )
  }

  function calculateViewHeight() {
    return Math.max(
      documentElementWithDefault.clientHeight,
      windowWithDefault.innerHeight
    )
  }

  const [viewWidth, setViewWidth] = useState(calculateViewWidth())
  const [viewHeight, setViewHeight] = useState(calculateViewHeight())

  function calculateIsPortrait() {
    return viewWidth < viewHeight
  }

  function calculateIsMobile() {
    return isPortrait
      ? viewWidth < MOBILE_BREAKPOINTS.PORTRAIT
      : viewWidth < MOBILE_BREAKPOINTS.LANDSCAPE
  }

  const [isPortrait, setIsPortrait] = useState(calculateIsPortrait)
  const [isMobile, setIsMobile] = useState(calculateIsMobile)

  function debouncedFunc(func) {
    return (function debounced() {
      let isTimeout = false
      return function attemptFunction() {
        if (isTimeout) return

        func()
        isTimeout = true
        setTimeout(() => {
          isTimeout = false
        }, 500)
      }
    })()
  }

  ;(function addResizeEvent() {
    if (windowWithDefault.addEventListener) {
      windowWithDefault.addEventListener(
        "resize",
        debouncedFunc(() => {
          setViewWidth(calculateViewWidth())
          setViewHeight(calculateViewHeight())
          setIsPortrait(calculateIsPortrait())
          setIsMobile(calculateIsMobile())
        })
      )
    }
  })()

  return { viewWidth, viewHeight, isPortrait, isMobile }
}
