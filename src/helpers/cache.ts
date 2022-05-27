import { SpecificShow, Tvshow } from '../api/api-type-definitions'

const cacheStore = Object.create({})

interface CacheReturnType {
  getCache: ({ url }: { url: string }) => string | undefined
  storeCache: ({
    url,
    data,
  }: {
    url: string
    data: SpecificShow | Tvshow
  }) => void
}

export function cachefn(): CacheReturnType {
  const getCache = ({ url }: { url: string }) => {
    if (cacheStore[cleanUrlString(url)]) {
      console.log('Request from cache:', cacheStore[cleanUrlString(url)])
      return cacheStore[cleanUrlString(url)]
    }
  }
  const storeCache = ({
    url,
    data,
  }: {
    url: string
    data: SpecificShow | Tvshow
  }) => {
    if (!data) return
    cacheStore[cleanUrlString(url)] = data
    console.log('Data stored in cache:', cacheStore)
  }
  function cleanUrlString(url: string) {
    return url.replace(/[^A-Za-z0-9]/g, '')
  }
  return { getCache, storeCache }
}
