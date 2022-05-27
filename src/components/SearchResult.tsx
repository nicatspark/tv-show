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
            <svg xmlns='http://www.w3.org/2000/svg' width='115' height='45'>
              <g
                fill='none'
                stroke='currentColor'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-miterlimit='10'
              >
                <path d='M108.519 35.397c-9.013 8.839-24.133 9.449-34.974 3.485-4.474-2.461-10.037-7.56-8.195-13.4.818-2.596 4.623-7.007 7.465-3.78 3.573 4.061-3.756 11.358-6.245 13.396-6.997 5.731-16.648 7.996-25.507 6.503-20.278-3.415-29.921-23.09-37.544-39.87' />
                <path
                  stroke-linejoin='round'
                  d='M109.988 43.269c-.98-4.277 1.606-7.742 1.49-11.938-2.883 1.396-8.855 3.965-12.196 3.507'
                />
              </g>
            </svg>
            <h5>Woo! Try'n write something.</h5>
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
