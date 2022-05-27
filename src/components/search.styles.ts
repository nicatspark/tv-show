import styled from '@emotion/styled'

export const Container = styled.main`
  max-width: 59rem;
  background-color: #eeeeee;
  height: 100%;
  margin: auto;
  isolation: isolate;
  header {
    height: 130px;
    width: 100%;
    background-color: #ee4e34;
    color: #272222;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 0 1rem;
    img {
      height: 2.4rem;
      position: relative;
      top: -0.2rem;
    }
  }
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
