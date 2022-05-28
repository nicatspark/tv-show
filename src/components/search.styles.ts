import styled from '@emotion/styled'

export const Container = styled.main`
  max-width: 59rem;
  background-color: #eeeeee;
  height: 100%;
  margin: auto;
  isolation: isolate;
  box-shadow: 0 0 20px 10px rgb(0 0 0 / 50%);
  .search {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #eeeeee;
    display: grid;
    place-items: center;
    grid-template-columns: min-content 1fr;
    /* grid-auto-rows: 3rem; */
    gap: 1rem;
    padding: 2rem;
    label {
      font-weight: bold;
    }
    input {
      border: none;
      padding: 1rem;
      width: 100%;
      font-size: 1.5rem;
    }
  }
`
