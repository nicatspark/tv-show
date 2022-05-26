import { Tvshow } from './api-type-definitions'

const baseurl = 'https://api.tvmaze.com'

export const searchApi = async (search: string): Promise<Tvshow[]> => {
  return await fetch(`${baseurl}/search/shows?q=${search}`)
    .then((res) => res.json())
    .then((data) => {
      return data
    })
    .catch((err) => {
      throw 'Network error'
    })
}
