import styled from '@emotion/styled'
import React from 'react'
import { Tvshow } from '../api/api-type-definitions'

const Item = styled.div`
  .h5 {
  }
`

const SearchResultEl = styled.article`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(150px, 100%), 1fr));
  padding: 1rem;
  & > div.card {
    content-visibility: auto;
    background-color: #ffffff;
    border-radius: 0.3rem;
    overflow: hidden;
    & > div {
      aspect-ratio: 4/3;
      img {
        object-fit: cover;
        width: 100%;
      }
    }
    h5 {
      text-align: center;
      padding: 0;
    }
  }
`
const EmptyList = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  h5 {
    color: #cccccc;
  }
`

type Props = { apiResult: Tvshow[] }

export const SearchResult = ({ apiResult }: Props) => {
  const missingImage =
    'https://digitalfinger.id/wp-content/uploads/2019/12/no-image-available-icon-6.png'
  return (
    <SearchResultEl>
      {apiResult.length > 0 ? (
        apiResult.map((showdata) => (
          <div className='card' key={showdata.show.id}>
            <div>
              <img
                loading='lazy'
                src={showdata.show.image?.medium || missingImage}
                alt={showdata.show.name}
              />
            </div>
            <h5>{showdata.show.name}</h5>
          </div>
        ))
      ) : (
        <EmptyList>
          <h5>No films to list.</h5>
        </EmptyList>
      )}
    </SearchResultEl>
  )
}
