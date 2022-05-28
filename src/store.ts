import { atom } from 'recoil'
import { Tvshow } from './api/api-type-definitions'

export const favState = atom<Tvshow[]>({
  key: 'favAtom',
  default: [],
})
