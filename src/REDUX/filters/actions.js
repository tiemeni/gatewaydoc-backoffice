import { UPDATE_FILTER } from "./types"





export const update = (model, payload) => ({ type: UPDATE_FILTER, payload, model });

export default {
  update

}