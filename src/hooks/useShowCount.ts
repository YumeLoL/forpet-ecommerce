import { useState, useEffect } from 'react'

// Custom hook to dynamically determine the showCount based on screen width
const useShowCount = ({
  mobileCount,
  tabletCount,
  smDesktopCount,
  desktopCount,
}: any) => {
  const [showCount, setShowCount] = useState(getShowCount())

  function getShowCount() {
    const width = window.innerWidth

    if (width < 480) {
      return mobileCount
    } else if (width >= 480 && width <= 768) {
      return tabletCount
    } else if (width > 768 && width <= 1024) {
      return smDesktopCount
    } else {
      return desktopCount
    }
  }

  useEffect(() => {
    function handleResize() {
      setShowCount(getShowCount())
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return showCount
}

export default useShowCount
