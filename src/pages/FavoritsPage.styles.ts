import styled from '@emotion/styled'

export const FavoritsContainer = styled.div`
  padding: 2rem 1rem;
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
`
