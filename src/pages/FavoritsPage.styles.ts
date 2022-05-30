import styled from '@emotion/styled'

export const FavoritsContainer = styled.div`
  padding: 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-flow: column nowrap;
  min-height: 400px;
  position: relative;
  @media only screen and (min-width: 756px) {
    flex-flow: column nowrap;
    align-items: flex-start;
  }
  ul {
    list-style-type: none;
    padding: 1.5rem 0;
    border-block: 1px solid #ccc;
    width: 100%;
    li {
      margin-bottom: 0.3em;
      font-weight: bold;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      svg {
        transform: scale(0.5);
      }
      a {
        text-decoration: none;
        color: var(--color-primary);
      }
    }
  }
  .btn-clear {
    border: 3px solid var(--color-primary);
    padding: 0.5em 1rem;
    border-radius: 0.3em;
    cursor: default;
    font-weight: bold;
    color: #444444;
    &:hover {
      background: #ffffff;
      color: #222222;
    }
  }
`
