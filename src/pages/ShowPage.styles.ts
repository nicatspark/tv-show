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
  h2,
  h6 {
    margin: 0;
    padding: 0;
  }
  h2 {
    font-size: 2em;
  }
  & > div > div.summary {
    max-width: 500px;
    & > p {
      line-height: 1.5em;
      margin-bottom: 1rem;
    }
  }
`

export const Breadcrumb = styled.div`
  font-size: 0.65rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background-color: #ccc;
  position: sticky;
  top: 0;
  z-index: 1;
  a {
    background-color: #335577;
    text-decoration: none;
    color: white;
    font-weight: bold;
    border-radius: 0.5em;
    padding: 0.5em 1em;
  }
  @media only screen and (min-width: 756px) {
    a {
      background-color: transparent;
      text-decoration: underline;
      color: #335577;
      border-radius: 0;
      padding: 0;
    }
  }
`
