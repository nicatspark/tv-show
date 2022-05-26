import { Tvshow } from './api-type-definitions'

const baseurl = 'https://api.tvmaze.com'

export const searchApi = async (search: string): Promise<Tvshow[]> => {
  const url = `${baseurl}/search/shows?q=${search}`
  return await doFetch(url)
}

export const detailsApi = async (id: number) => {
  const url = `${baseurl}/search/shows/${id}`
  return await doFetch(url)
}

const doFetch = (url: string) => {
  return fetch(url)
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((data) => {
      return data
    })
    .catch((err) => {
      throw Error('Network error')
    })
}
