import { useEffect, useReducer, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { Tvshow } from '../api/api-type-definitions'
import { favState } from '../store'

export function useFavorits() {
  const [favs, setFav] = useRecoilState(favState)
  const doneOnce = useRef(false)
  const [, forceUpdate] = useReducer((x) => x + 1, 0)

  const initiateFavorites = () => {
    if (doneOnce.current) return
    doneOnce.current = true
    setFav(persistent().get())
  }

  const showExistsInFavs = (selectedShow: Tvshow) => {
    const selectedShowId = selectedShow.show.id
    return !!favs.find((show) => show.show.id === selectedShowId)
  }

  const toggleFavorit = ({ selectedShow }: { selectedShow: Tvshow }) => {
    const selectedShowId = selectedShow.show.id
    showExistsInFavs(selectedShow)
      ? setFav(favs.filter((show) => show.show.id !== selectedShowId))
      : setFav([...favs, selectedShow])
  }

  // This will automatically store favs once updated in the necessary async fashion.
  useEffect(() => {
    if (favs.length === 0 && !doneOnce.current) return
    localStorage.setItem('favorites', JSON.stringify(favs))
  }, [favs])

  const persistent = () => {
    const get = (): Tvshow[] => {
      const storedVal = localStorage.getItem('favorites')
      if (!storedVal) return []
      return JSON.parse(storedVal)
    }
    return { get }
  }

  return { toggleFavorit, favs, initiateFavorites }
}
