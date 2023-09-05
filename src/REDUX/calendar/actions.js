import { SAVE_EVENT, SAVE_EVENT_PRACTIONNER_FILTER, LOADING_EVENT_PRACTIONNER_FILTER_START } from "./types"


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
  }

export const saveEventsPractionnerStart = () => {
  return {
    type: LOADING_EVENT_PRACTIONNER_FILTER_START
  }
}

  

