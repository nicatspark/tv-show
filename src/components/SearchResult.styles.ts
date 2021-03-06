import styled from '@emotion/styled'

export const Item = styled.div`
  .h5 {
  }
`

export const SearchResultEl = styled.article`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(180px, 100%), 1fr));
  padding: 1rem;
  position: relative;
  .contain-z-index {
    isolation: isolate;
  }
  & > div.card {
    content-visibility: auto; /* only in chrome based browsers for now */
    background-color: #ffffff;
    border-radius: 0.3rem;
    overflow: hidden;
    cursor: pointer;
    transition: all 200ms linear;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    position: relative;
    aspect-ratio: 9/12;
    &:hover {
      outline: 3px solid var(--color-primary);
      transform: scale(1.05);
      z-index: 1;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    }
    & > div.showtop {
      position: absolute;
      top: 0;
      padding: 0.8rem;
      display: flex;
      justify-content: space-between;
      div.rating {
        background-color: var(--color-primary);
        color: #ffffff;
        border-radius: 50%;
        font-weight: bold;
        padding: 0.5em;
      }
      svg {
        transform: scale(1.5);
        stroke-width: 2px;
        stroke: var(--color-primary);
        fill: transparent;
        filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5));
        &.selected {
          fill: var(--color-primary);
        }
      }
    }
    & > div {
      position: absolute;
      width: 100%;
      img {
        object-fit: cover;
        width: 100%;
      }
    }
    h5 {
      text-align: center;
      padding: 2rem 0 1rem 0;
      position: absolute;
      bottom: 0;
      width: 100%;
      background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 40%,
        rgba(0, 0, 0, 0) 100%
      );
      margin: 0;
      min-height: 4rem;
      color: #ffffff;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    }
  }
  /* optional animation on hover */
  & > div.card.animate {
    transform: perspective(800px) rotateY(0deg) scale(0.9) rotateX(0deg);
    /* filter: blur(2px); */
    opacity: 0.9;
    transition: 0.3s ease all;
    &:hover {
      transform: perspective(800px) rotateY(-15deg) translateY(-10px)
        rotateX(10deg) scale(1);
      filter: blur(0);
      opacity: 1;
    }
  }
  & > div.card.clicked.animate {
    transform: perspective(800px) rotateY(-15deg) translateY(-10px)
      rotateX(10deg) scale(3);
    opacity: 0;
    z-index: 200;
  }
`
export const EmptyList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  .hint {
    display: flex;
    svg {
      transform: scaleX(-1) rotate(-30deg);
      color: var(--color-primary);
    }
    h5 {
      font-family: 'Caveat', cursive;
      font-size: 1.5rem;
      color: var(--color-primary);
      transform: rotate(-10deg) translate(0.8rem, -2.6rem);
    }
  }
  div.bgimage {
    display: contents;
    max-width: 100vw;
    img {
      position: absolute;
      bottom: -30%;
      max-width: 100vw;
      object-fit: cover;
      z-index: -1;
    }
  }
  @media (max-height: 670px) {
    div.bgimage {
      display: none;
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
