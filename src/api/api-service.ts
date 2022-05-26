import { SpecificShow, Tvshow } from './api-type-definitions'

const baseurl = 'https://api.tvmaze.com'

export const searchApi = async (search: string): Promise<Tvshow[]> => {
  const url = `${baseurl}/search/shows?q=${search}`
  const options = { mode: 'cors' }
  return await doFetch(url, options)
}

export const detailsApi = async (id: number): Promise<SpecificShow> => {
  const url = `${baseurl}/shows/${id}`
  const options = { mode: 'cors' }
  return await doFetch(url, options)
}

const doFetch = (url: string, options: any) => {
  return fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        console.log('Error occured', res)
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then((data) => {
      return data
    })
    .catch((err) => {
      throw new Error('Network error')
    })
}
