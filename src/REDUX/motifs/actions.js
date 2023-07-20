import { SAVE_MOTIFS } from "./types"


export const saveMotifs = (payload) => {
  return {
    type: SAVE_MOTIFS,
    payload
  }
}
