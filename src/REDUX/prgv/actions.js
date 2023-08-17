import { SAVE_STEP, SAVE_ERROR, SAVE_EVENT_PRACTIONNER_FILTER, SAVE_DATA } from "./types"


export const saveStep = (step,payload) => {
  return {
    type: SAVE_STEP,
    payload,
    step
  }
}

export const saveData = (key,payload) => {
  return {
    type: SAVE_DATA,
    payload,
    key
  }
}

export const saveError = (payload) => {
  return {
    type: SAVE_ERROR,
    payload,
  }
}

export const saveEventsPractionner = (payload) => {
    return {
      type: SAVE_EVENT_PRACTIONNER_FILTER,
      payload
    }
  }