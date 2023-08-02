import { SAVE_EVENT, SAVE_EVENT_PRACTIONNER_FILTER } from "./types"


export const saveEvents = (payload) => {
  return {
    type: SAVE_EVENT,
    payload
  }
}

export const saveEventsPractionner = (payload) => {
    return {
      type: SAVE_EVENT_PRACTIONNER_FILTER,
      payload
    }
<<<<<<< HEAD
  }
=======
  }

>>>>>>> 44c74b29ceaf6d946783a486df51db0240c0749e
