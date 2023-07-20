import { SAVE_ALL_PRATICIENS } from './types'


export const savePraticiens = (payload) => {
  return {
    type: SAVE_ALL_PRATICIENS,
    payload
  }
}
