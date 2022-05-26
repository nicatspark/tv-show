export interface Tvshow {
  score: number
  show: Show
}

interface Show {
  id: number
  url: string
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  runtime?: any
  averageRuntime?: any
  premiered?: any
  ended?: any
  officialSite?: any
  schedule: Schedule
  rating: Rating
  weight: number
  network?: any
  webChannel: WebChannel
  dvdCountry?: any
  externals: Externals
  image?: Image
  summary: string
  updated: number
  _links: Links
}

interface Links {
  self: Self
}

interface Self {
  href: string
}

interface Externals {
  tvrage?: any
  thetvdb: number
  imdb: string
}

interface WebChannel {
  id: number
  name: string
  country?: any
  officialSite: string
}

interface Rating {
  average?: any
}

interface Schedule {
  time: string
  days: any[]
}

interface Image {
  medium: string
  original: string
}
