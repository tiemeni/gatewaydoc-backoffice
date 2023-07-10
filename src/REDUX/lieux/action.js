import { FETCH_LIEUX_REQUEST, FETCH_LIEUX_SUCCESS, FETCH_LIEUX_FAILURE } from "./types"

import { url } from "../../Constants/urls";

export const getAllLieux = () => {
    return dispatch => {
        dispatch({ type: FETCH_LIEUX_REQUEST });
        console.log("on est ici")
        fetch( url+'lieu/' )
          .then(response => response.json())
          .then(data => {
            dispatch({ type: FETCH_LIEUX_SUCCESS, payload: data })
            }
            )
          .catch(error => dispatch({ type: FETCH_LIEUX_FAILURE, payload: error }));
      };

}