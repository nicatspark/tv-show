import { broadcast } from '@foundit/broadcasterjs'
import { useEffect, useState } from 'react'

export const useIsLoadingSearchResult = (): boolean => {
  const [showSearchLoader, setShowSearchLoader] = useState(false)

  useEffect(() => {
    const callback = ({ detail: pendingSearch }: { detail: boolean }) => {
      setShowSearchLoader(pendingSearch)
    }
    broadcast.on(['PENDING-SEARCH', callback])
    return () => broadcast.off(['PENDING-SEARCH', callback])
  }, [])

  return showSearchLoader
}
