import { SAVE_LIEUX } from "./types"


export const saveLieu = (payload) => {
  return {
    type: SAVE_LIEUX,
    payload
  }
}