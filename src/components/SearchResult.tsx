import { useNavigate } from 'react-router-dom'
import { Tvshow } from '../api/api-type-definitions'
import { useIsLoadingSearchResult } from '../helpers/useIsLoadingSearchResult'
import { EmptyList, SearchLoader, SearchResultEl } from './SearchResult.styles'
import loader from '../icons/loader.svg'
import handrawnarrow from '../icons/handDrawnArrow.svg'

type Props = { apiResult: Tvshow[] }

export const SearchResult = ({ apiResult }: Props) => {
  const navigate = useNavigate()
  const missingImage =
    'https://digitalfinger.id/wp-content/uploads/2019/12/no-image-available-icon-6.png'

  const showDetails = (id: number) => {
    navigate(`/show/${id}`)
  }

  const showSearchLoader = useIsLoadingSearchResult()

  return (
    <SearchResultEl>
      {apiResult.length > 0 ? (
        apiResult.map((showdata) => (
          <div
            className='card'
            onClick={() => showDetails(showdata.show.id)}
            key={showdata.show.id}
          >
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
          <div className='hint'>
            <img src={handrawnarrow} alt='arrow' />
            <h5>Try write something.</h5>
          </div>
        </EmptyList>
      )}
      {showSearchLoader && (
        <SearchLoader>
          <img src={loader} alt='Loading...' />
        </SearchLoader>
      )}
    </SearchResultEl>
  )
}
