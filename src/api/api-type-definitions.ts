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
  tvrage?: number
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
  average?: number
}

interface Schedule {
  time: string
  days: any[]
}

interface Image {
  medium: string
  original: string
}

/*************/

export interface SpecificShow {
  id: number
  url: string
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  runtime: number
  averageRuntime: number
  premiered: string
  ended: string
  officialSite: string
  schedule: Schedule
  rating: Rating
  weight: number
  network: Network
  webChannel?: any
  dvdCountry?: any
  externals: Externals
  image: Image
  summary: string
  updated: number
  _links: Links
}

interface Links {
  self: Self
  previousepisode: Self
}

interface Self {
  href: string
}

interface Image {
  medium: string
  original: string
}

interface Network {
  id: number
  name: string
  country: Country
  officialSite: string
}

interface Country {
  name: string
  code: string
  timezone: string
}

interface Schedule {
  time: string
  days: any[]
}
