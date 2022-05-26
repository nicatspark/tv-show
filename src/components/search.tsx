import React, { useEffect, useRef, useState } from 'react'
import { searchApi } from '../api/api-service'
import { Tvshow } from '../api/api-type-definitions'

type Props = {
  updateResults: (result: Tvshow[]) => void
}

export default function Search({ updateResults }: Props) {
  const [searchString, setSearchString] = useState('')
  const input = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    input.current && input.current.focus()
  })

  useEffect(() => {
    const callAsync = async () => {
      const result = await searchApi(searchString)
      console.log('result', result)
      updateResults(result)
      input.current && input.current.focus()
    }
    if (searchString.length >= 2) callAsync()
  }, [searchString])

  return (
    <>
      <div className='search'>
        <label htmlFor='search-input'>Search</label>
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
