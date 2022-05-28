import React, { useEffect, useRef, useState } from 'react'
import { searchApi } from '../api/api-service'
import { Tvshow } from '../api/api-type-definitions'
import { broadcast } from '@foundit/broadcasterjs'
import Magnifyer from '../icons/magnifyer.svg'
import { Breadcrumb } from '../pages/ShowPage.styles'

type Props = {
  updateResults: (result: Tvshow[]) => void
}

export default function Search({ updateResults }: Props) {
  const [searchString, setSearchString] = useState<string>('')
  const input = useRef<HTMLInputElement | null>(null)
  const [persistantGet, persistantStore] = useMakePersistant(setSearchString)

  useEffect(() => {
    input.current && input.current.focus()
  })

  useEffect(() => {
    const callAsync = async () => {
      const result = await searchApi(searchString)
      updateResults(result)
      persistantStore(searchString)
      input.current && input.current.focus()
      broadcast.emit('PENDING-SEARCH', false)
    }
    if (searchString.length >= 2) {
      broadcast.emit('PENDING-SEARCH', true)
      callAsync()
    } else updateResults([])
  }, [searchString])

  useEffect(() => {
    const defaultSearchString = persistantGet()
    if (defaultSearchString) setSearchString(defaultSearchString)
  }, [])

  return (
    <>
      <nav></nav>
      <div className='search'>
        <label htmlFor='search-input'>
          <img src={Magnifyer} alt='Search' className='hide-sm' />
        </label>
        <input
          type='search'
          ref={input}
          id='search-input'
          className='search-input'
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
      </div>
    </>
  )
}

function useMakePersistant(
  setSearchString: (searchString: string) => void
): [() => string | null, (s: string) => void] {
  const persistantStore = (s: string) => {
    sessionStorage.setItem('searchString', s)
  }
  const persistantGet = () => sessionStorage.getItem('searchString')

  useEffect(() => {
    const defaultSearchString = sessionStorage.getItem('searchString')
    if (defaultSearchString) setSearchString(defaultSearchString)
  }, [])

  return [persistantGet, persistantStore]
}
