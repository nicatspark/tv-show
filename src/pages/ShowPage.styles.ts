import styled from '@emotion/styled'

export const Container = styled.div`
  padding: 2rem 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-flow: column nowrap;
  min-height: 400px;
  position: relative;
  @media only screen and (min-width: 756px) {
    flex-flow: row nowrap;
    align-items: flex-start;
  }
  div.loader {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    & > img {
      border: none;
      transform: scale(2);
    }
  }
  img {
    border: 1px solid #333333;
    max-width: 400px;
  }
  h2 {
    margin-top: 0;
  }
  & > div > p {
    line-height: 1.5em;
  }
`

export const Breadcrumb = styled.div`
  font-size: 0.65rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background-color: #ccc;
  a {
    text-decoration: underline;
    color: #335577;
  }
`
