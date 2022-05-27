import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { detailsApi } from '../api/api-service'
import { SpecificShow } from '../api/api-type-definitions'
import { extractError } from '../helpers/extractError'
import parse from 'html-react-parser'
import loader from '../icons/loader.svg'
import { Breadcrumb, Container } from './ShowPage.styles'

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
    <>
      <Breadcrumb>
        <Link to='/'>&lt; back to the search page</Link>
      </Breadcrumb>
      <Container>
        <img src={showData.image.medium} alt={showData.name} />
        <div>
          <h2>{showData.name}</h2>
          <Fragment>{parse(showData.summary)}</Fragment>
        </div>
      </Container>
    </>
  )
}
