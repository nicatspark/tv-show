import styled from '@emotion/styled'
import tv from '../icons/tv.svg'

const HeaderStyled = styled.header`
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
`
export const Header = () => {
  return (
    <HeaderStyled>
      <img src={tv} alt='TV-logo' />
      <h1>TV-Search</h1>
    </HeaderStyled>
  )
}
