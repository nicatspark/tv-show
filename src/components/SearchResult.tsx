import styled from '@emotion/styled'
import React from 'react'
import { Tvshow } from '../api/api-type-definitions'

const Item = styled.div`
  .h5 {
  }
`
const EmptyList = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`

type Props = { apiResult: Tvshow[] }

export const SearchResult = ({ apiResult }: Props) => {
  return (
    <article>
      {apiResult.length > 0 ? (
        apiResult.map((showdata) => (
          <div key={showdata.show.id}>
            <h5>{showdata.show.name}</h5>
          </div>
        ))
      ) : (
        <EmptyList>
          <h5>No films to list.</h5>
        </EmptyList>
      )}
    </article>
  )
}
