import { FETCH_MOTIF_REQUEST, FETCH_MOTIF_SUCCESS, FETCH_MOTIF_FAILURE  } from "./types"

import { url } from "../../Constants/urls";

export const getAllMotif = () => {
    return dispatch => {
        dispatch({ type: FETCH_MOTIF_REQUEST });
        console.log("on est ici")
        fetch( url+'motif/' )
          .then(response => response.json())
          .then(data => {
            dispatch({ type: FETCH_MOTIF_SUCCESS, payload: data })
            }
            )
          .catch(error => dispatch({ type: FETCH_MOTIF_FAILURE, payload: error }));
      };

}