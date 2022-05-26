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
    content-visibility: auto;
    background-color: #ffffff;
    border-radius: 0.3rem;
    overflow: hidden;
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
  h5 {
    color: #cccccc;
  }
`

export const SearchLoader = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  inset: 0;
  position: absolute;
`
