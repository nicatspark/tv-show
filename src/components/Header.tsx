import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import tv from '../icons/tv.svg'

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
      z-index: 2;
    }
    @media only screen and (min-width: 756px) {
      position: relative;
      border: none;
      z-index: unset;
    }
  }
`
export const Header = () => {
  return (
    <HeaderStyled>
      <div className='logo'>
        <img src={tv} alt='TV-logo' />
        <h1>TV-Search</h1>
      </div>
      <div className='favs'>
        <Link to='/favorits'>My favorits</Link>
      </div>
    </HeaderStyled>
  )
}
