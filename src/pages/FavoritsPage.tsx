import { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Breadcrumb } from './ShowPage.styles'
import { FavoritsContainer } from './FavoritsPage.styles'
import { swipedetect } from '../helpers/swipeDetect'
import { favState } from '../store'
import { useRecoilValue } from 'recoil'

type Props = {}

export const FavoritsPage = ({}: Props) => {
  const swipeEl = useRef<HTMLDivElement | null>(null)
  const favs = useRecoilValue(favState)

  useNavigateOnSwipe(swipeEl.current)

  return (
    <>
      <Breadcrumb>
        <Link to='/'>search again</Link>
        <span className='hide-sm'> &raquo; Favorits</span>
      </Breadcrumb>
      <FavoritsContainer ref={swipeEl}>
        <h1>My Favorites</h1>
        {favs.length > 0 ? (
          <ul>
            {favs.map((show) => (
              <li>
                <Link to={`/show/${show.show.id}`}>{show.show.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No favorits selected yet.</p>
        )}
      </FavoritsContainer>
    </>
  )
}

function useNavigateOnSwipe(el: HTMLDivElement | null) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!el) return
    swipedetect(el, (dir) => {
      if (dir === 'right') navigate('/')
    })
  }, [])
}
