import { useState, useEffect } from "react"

const documentElementWithDefault =
  typeof document !== "undefined"
    ? document.documentElement
    : { clientWidth: 0, clientHeight: 0 }

const windowWithDefault =
  typeof window !== "undefined" ? window : { innerWidth: 200, innerHeight: 300 }

const MOBILE_BREAKPOINTS = { PORTRAIT: 568, LANDSCAPE: 820 }

export const MobileStates = {
  CONTROL: 0,
  PREVIEW: 1,
}

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

  let viewWidth = calculateViewWidth()
  let viewHeight = calculateViewHeight()

  function calculateIsPortrait(viewWidth, viewHeight) {
    return viewWidth < viewHeight
  }

  const [isPortrait, setIsPortrait] = useState(
    calculateIsPortrait(viewWidth, viewHeight)
  )

  function calculateIsMobile(viewWidth, viewHeight) {
    return viewWidth < viewHeight
      ? viewWidth < MOBILE_BREAKPOINTS.PORTRAIT
      : viewWidth < MOBILE_BREAKPOINTS.LANDSCAPE
  }

  const [isMobile, setIsMobile] = useState(
    calculateIsMobile(viewWidth, viewHeight)
  )

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
          viewWidth = calculateViewWidth()
          viewHeight = calculateViewHeight()
          setIsPortrait(calculateIsPortrait(viewWidth, viewHeight))
          setIsMobile(calculateIsMobile(viewWidth, viewHeight))
        })
      )
    }
  })()

  return { viewWidth, viewHeight, isPortrait, isMobile }
}

export const useIsClient = () => {
  const [isClient, setClient] = useState(false)
  const key = isClient ? "client" : "server"

  useEffect(() => {
    setClient(true)
  }, [])

  return { isClient, key }
}
