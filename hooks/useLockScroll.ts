import { useEffect } from 'react'

const useLockScroll = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }

    return () => {
      document.body.style.overflowY = 'scroll'
    }
  }, [isOpen])
}

export { useLockScroll }
