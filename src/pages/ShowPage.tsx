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
        &laquo; <Link to='/'>search more</Link>
        <span className='hide-sm'>
          {' '}
          {parse('&#10033;')} show details - <strong>{showData.name}</strong>
        </span>
      </Breadcrumb>
      <Container>
        <img
          width={210}
          height={295}
          src={
            showData.image?.medium ||
            'https://www.nationalpetregister.org/assets/img/no-photo.jpg'
          }
          alt={showData.name}
        />
        <div>
          <h2>{showData.name}</h2>
          <h6>
            {showData.genres.join(', ')} {parse('&#10033;')}{' '}
            {year(showData.premiered)}
            {showData.ended && ' - '} {year(showData.ended)}
          </h6>
          <div className='summary'>
            {parse(
              showData.summary ||
                '<p>Sorry but the summary seems to be missing.<p>'
            )}
          </div>
        </div>
      </Container>
    </>
  )
}

function year(s: string) {
  if (typeof s !== 'string') return s
  return s.split('-')[0]
}
