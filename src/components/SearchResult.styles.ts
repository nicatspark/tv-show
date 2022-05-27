import styled from '@emotion/styled'

export const Item = styled.div`
  .h5 {
  }
`

export const SearchResultEl = styled.article`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(150px, 100%), 1fr));
  padding: 1rem;
  position: relative;
  & > div.card {
    content-visibility: auto; /* only in chrome based browsers for now */
    background-color: #ffffff;
    border-radius: 0.3rem;
    overflow: hidden;
    cursor: pointer;
    transition: all 200ms linear;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    &:hover {
      outline: 3px solid var(--primary);
      transform: scale(1.05);
      z-index: 1;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    }
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
export const EmptyList = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  .hint {
    display: flex;
    svg {
      transform: scaleX(-1) rotate(-30deg);
      color: fuchsia;
    }
    h5 {
      font-family: 'Caveat', cursive;
      font-size: 1.5rem;
      color: fuchsia;
      transform: rotate(-10deg) translate(0.8rem, -2.6rem);
    }
  }
`

export const SearchLoader = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  inset: 0;
  position: absolute;
  display: grid;
  place-items: center;
  img {
    transform: scale(2);
  }
`
