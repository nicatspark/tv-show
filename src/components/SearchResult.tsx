import { useNavigate } from 'react-router-dom'
import { Tvshow } from '../api/api-type-definitions'
import { useIsLoadingSearchResult } from '../helpers/useIsLoadingSearchResult'
import { EmptyList, SearchLoader, SearchResultEl } from './SearchResult.styles'
import loader from '../icons/loader.svg'
import React from 'react'
import { FavStar } from './FavStar'
import { useFavorits } from '../helpers/useFavorits'
import { missingImage } from '../config'
import { HandDrawnArrow } from './HandDrawnArrow'
import tv from '../icons/tv.svg'

type Props = { apiResult: Tvshow[] }

export const SearchResult = ({ apiResult }: Props) => {
  const navigate = useNavigate()
  const { toggleFavorit, favs } = useFavorits()

  const handleCardClick = (e: React.MouseEvent, id: number, index: number) => {
    if (isFavClick(e)) {
      e.stopPropagation()
      toggleFavorit({ selectedShow: apiResult[index] })
      return
    }
    makeRoomForAnimationToPop()
    makeAnimationPop()
    setTimeout(() => navigate(`/show/${id}`), 300)

    function makeAnimationPop() {
      const el = (e.target as HTMLDivElement).closest('.card')
      el?.classList.add('clicked')
    }

    function makeRoomForAnimationToPop() {
      const el = document.querySelector('.contain-z-index')
      el?.classList.remove('contain-z-index')
    }

    function isFavClick(e: React.MouseEvent) {
      const el = e.target as HTMLElement
      return !!el.closest('.fav')
    }
  }

  const showSearchLoader = useIsLoadingSearchResult()

  return (
    <SearchResultEl className='contain-z-index'>
      {apiResult.length > 0 ? (
        apiResult.map((showdata, index) => (
          <div
            className='card animate'
            onClick={(e) => handleCardClick(e, showdata.show.id, index)}
            key={showdata.show.id}
          >
            <div>
              <img
                loading='lazy'
                src={showdata.show.image?.medium || missingImage}
                alt={showdata.show.name}
              />
            </div>
            <div className='showtop'>
              <div className={showdata.show.rating.average ? 'rating' : ''}>
                {showdata.show.rating.average}
              </div>
              <FavStar
                selected={
                  !!favs?.find((show) => show.show.id === showdata.show.id)
                }
              />
            </div>
            <h5>{showdata.show.name}</h5>
          </div>
        ))
      ) : (
        <EmptyList>
          <div className='hint scale-down-sm'>
            <HandDrawnArrow />
            <h5>Wooho! Try'n write something.</h5>
          </div>
          <div className='bgimage'>
            <img src={tv} alt='background image' />
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
