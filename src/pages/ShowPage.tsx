import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { detailsApi } from '../api/api-service'
import { SpecificShow } from '../api/api-type-definitions'
import { extractError } from '../helpers/extractError'
import parse from 'html-react-parser'
import loader from '../icons/loader.svg'
import { Breadcrumb, Container } from './ShowPage.styles'
import { swipedetect } from '../helpers/swipeDetect'

type Props = {}

export const ShowPage = ({}: Props) => {
  const { id } = useParams()
  const [error, setError] = useState<string>('')
  const [showData, setShowData] = useState<SpecificShow>()
  const swipeEl = useRef<HTMLDivElement | null>(null)

  useNavigateOnSwipe(swipeEl.current)

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
        <Link to='/'>search again</Link>
        <span className='hide-sm'>
          {' '}
          &raquo; show details - <strong>{showData.name}</strong>
        </span>
      </Breadcrumb>
      <Container ref={swipeEl}>
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
            <>
              {showData.genres.join(', ')}
              <Sep />
              {year(showData.premiered)}
              {showData.ended && ' - '} {year(showData.ended)}
              <Sep />
              Scoring: {showData.rating?.average || '-'}
            </>
          </h6>
          <div className='summary'>
            {parse(
              wrapInPifMissing(showData.summary) ||
                '<p>Sorry but the summary seems to be missing.<p>'
            )}
          </div>
        </div>
      </Container>
    </>
  )
}

/* local helpers */

function wrapInPifMissing(s: string) {
  if (!s) return
  return !!s.trim().match(/^<p>/i) ? s : `<p>${s}</p>`
}

function year(s: string) {
  if (typeof s !== 'string') return s
  return s.split('-')[0]
}

function Sep() {
  return <span className='separator'>{parse('&#10033;')}</span>
}

function useNavigateOnSwipe(el: HTMLDivElement | null) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!el) return
    swipedetect(el, (dir) => {
      if (dir === 'right') navigate('/')
    })
  }, [])
}
