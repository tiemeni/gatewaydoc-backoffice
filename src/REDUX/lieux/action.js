import { FETCH_LIEUX_REQUEST, FETCH_LIEUX_SUCCESS, FETCH_LIEUX_FAILURE } from "./types"

import { url } from "../../Constants/urls";
import app from "../../Configs/app";

export const getAllLieux = () => {
    return dispatch => {
        dispatch({ type: FETCH_LIEUX_REQUEST });
        console.log("on est ici")
        fetch( url+`lieu/?idCentre=${app.idCentre}` )
          .then(response => response.json())
          .then(data => {
            dispatch({ type: FETCH_LIEUX_SUCCESS, payload: data })
            }
            )
          .catch(error => dispatch({ type: FETCH_LIEUX_FAILURE, payload: error }));
      };

}