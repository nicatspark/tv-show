import styled from '@emotion/styled'
import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { detailsApi } from '../api/api-service'
import { SpecificShow } from '../api/api-type-definitions'
import { extractError } from '../helpers/extractError'

const Container = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-flow: column nowrap;
  @media only screen and (min-width: 756px) {
    flex-flow: row nowrap;
    align-items: flex-start;
  }
  img {
    border: 1px solid #333333;
    max-width: 400px;
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
        console.log(data)
        setError('')
        setShowData(data)
      } catch (err) {
        setError(extractError(err))
      }
    }
    if (id && !isNaN(+id)) doAsync(+id)
  }, [id])

  console.log('error', error)

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
        <h2>Loading...</h2>
      </Container>
    )

  return (
    <Container>
      <img src={showData.image.medium} alt={showData.name} />
      <div>
        <h2>{showData.name}</h2>
        <Fragment>{showData.summary}</Fragment>
      </div>
    </Container>
  )
}
