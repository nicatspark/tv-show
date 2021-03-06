import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import tv from '../icons/tv.svg'
import { favState } from '../store'

const HeaderStyled = styled.header`
  height: 130px;
  width: 100%;
  background-color: #000000;
  color: #272222;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: relative;
  div.logo {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    img {
      height: 4rem;
      position: relative;
      top: -0.6rem;
    }
    h1 {
      color: white;
      text-shadow: 1px 1px 5px rgb(0 0 0 / 50%);
      font-family: 'Monoton', cursive;
      text-transform: uppercase;
      font-weight: normal;
    }
  }
  div.favs {
    white-space: nowrap;
    a {
      background-color: var(--color-primary);
      color: #000000;
      padding: 0.7em 1em;
      border-radius: 0.6em;
      font-weight: bold;
      text-decoration: none;
      position: absolute;
      right: 1em;
      bottom: -2rem;
      border: 3px solid #000000;
      z-index: 101;
      display: flex;
      align-items: center;
      div.favtotal {
        background-color: #000000;
        border-radius: 50%;
        color: #ffffff;
        padding: 0em;
        width: 2em;
        aspect-ratio: 1/1;
        display: grid;
        place-items: center;
        transform: scale(0.6);
        position: absolute;
        top: -0.8em;
        right: -0.8em;
        border: 3px solid var(--color-primary);
      }
    }
    @media only screen and (min-width: 756px) {
      position: relative;
      border: none;
      z-index: unset;
    }
  }
`
export const Header = () => {
  const favs = useRecoilValue(favState)
  return (
    <HeaderStyled>
      <div className='logo'>
        <img src={tv} alt='TV-logo' />
        <h1>TV-Search</h1>
      </div>
      <div className='favs'>
        <Link to='/favorits'>
          <div className='favtotal'>{favs.length}</div>
          <span>My favorits</span>
        </Link>
      </div>
    </HeaderStyled>
  )
}
