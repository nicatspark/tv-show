import React, { useEffect, useRef, useState } from 'react'
import { searchApi } from '../api/api-service'
import { Tvshow } from '../api/api-type-definitions'
import { broadcast } from '@foundit/broadcasterjs'
import Magnifyer from '../icons/magnifyer.svg'

type Props = {
  updateResults: (result: Tvshow[]) => void
}

export default function Search({ updateResults }: Props) {
  const [searchString, setSearchString] = useState<string>('')
  const input = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    input.current && input.current.focus()
  })

  useEffect(() => {
    const callAsync = async () => {
      const result = await searchApi(searchString)
      updateResults(result)
      input.current && input.current.focus()
      broadcast.emit('PENDING-SEARCH', false)
    }
    if (searchString.length >= 2) {
      broadcast.emit('PENDING-SEARCH', true)
      callAsync()
    } else updateResults([])
  }, [searchString])

  return (
    <>
      <div className='search'>
        <label htmlFor='search-input'>
          <img src={Magnifyer} alt='Search' />
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
