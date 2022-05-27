import styled from '@emotion/styled'
import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { detailsApi } from '../api/api-service'
import { SpecificShow } from '../api/api-type-definitions'
import { extractError } from '../helpers/extractError'
import parse from 'html-react-parser'
import loader from '../icons/loader.svg'

const Container = styled.div`
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

type Props = {}

export const ShowPage = ({}: Props) => {
  const { id } = useParams()
  const [error, setError] = useState<string>('')
  const [showData, setShowData] = useState<SpecificShow>()

  useEffect(() => {
    const doAsync = async (id: number) => {
      try {
        const data = await detailsApi(id)
        setError('')
        setShowData(data)
      } catch (err) {
        setError(extractError(err))
      }
    }
    if (id && !isNaN(+id)) doAsync(+id)
  }, [id])

  if (!!error)
    return (
      <Container>
        <h2>An error occurred.</h2>
        <p>{error}</p>
      </Container>
    )

  if (!showData)
    return (
      <Container>
        <div className='loader'>
          <img src={loader} alt='Loading...' />
        </div>
      </Container>
    )

  return (
    <Container>
      <img src={showData.image.medium} alt={showData.name} />
      <div>
        <h2>{showData.name}</h2>
        <Fragment>{parse(showData.summary)}</Fragment>
      </div>
    </Container>
  )
}
