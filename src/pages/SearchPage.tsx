import React, { useState } from 'react'
import { Tvshow } from '../api/api-type-definitions'
import Search from '../components/search'
import { SearchResult } from '../components/SearchResult'

export const SearchPage = () => {
  const [apiResult, setApiResult] = useState<Tvshow[]>([])

  const updateResult = (data: Tvshow[]) => {
    setApiResult(data)
  }
  return (
    <>
      <Search updateResults={updateResult} />
      <SearchResult apiResult={apiResult} />
    </>
  )
}
