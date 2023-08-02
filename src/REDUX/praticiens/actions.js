import { SAVE_ALL_PRATICIENS, SAVE_PRATICIENS_PER_JOB } from './types'


export const savePraticiens = (payload) => {
  return {
    type: SAVE_ALL_PRATICIENS,
    payload
  }
}

export const savePraticiensPerJob = (payload) => {
  return {
    type: SAVE_PRATICIENS_PER_JOB,
    payload
  }
}