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
<<<<<<< HEAD
}
=======
}
>>>>>>> 44c74b29ceaf6d946783a486df51db0240c0749e
