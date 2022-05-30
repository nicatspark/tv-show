import { useRef } from 'react'
import { Link } from 'react-router-dom'

import { Breadcrumb } from './ShowPage.styles'
import { FavoritsContainer } from './FavoritsPage.styles'
import { favState } from '../store'
import { useRecoilState } from 'recoil'
import { FavStar } from '../components/FavStar'
import { useNavigateOnRightSwipe } from '../helpers/useNavigateOnRightSwipe'

export const FavoritsPage = () => {
  const swipeEl = useRef<HTMLDivElement | null>(null)
  const [favs, setFavs] = useRecoilState(favState)

  useNavigateOnRightSwipe()

  const clearFavs = () => {
    if (confirm('You sure?')) setFavs([])
  }

  return (
    <>
      <Breadcrumb>
        <Link to='/'>search again</Link>
        <span className='hide-sm'> &raquo; Favorits</span>
      </Breadcrumb>
      <FavoritsContainer ref={swipeEl}>
        <h1>My Favorites</h1>
        {favs.length > 0 ? (
          <>
            <ul>
              {favs.map((show) => (
                <li key={show.show.id}>
                  <FavStar />
                  <Link to={`/show/${show.show.id}`}>{show.show.name}</Link>
                </li>
              ))}
            </ul>
            <div className='btn-clear' onClick={clearFavs}>
              Clear favorites
            </div>
          </>
        ) : (
          <p>No favorits selected yet.</p>
        )}
      </FavoritsContainer>
    </>
  )
}
