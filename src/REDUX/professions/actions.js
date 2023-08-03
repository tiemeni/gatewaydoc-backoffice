import { FETCH_PROFESSION_REQUEST, FETCH_PROFESSION_SUCCESS, FETCH_PROFESSION_FAILURE  } from "./types"

import { url } from "../../Constants/urls";
import app from "../../Configs/app";

export const getAllProfessions = () => {
    return dispatch => {
        dispatch({ type: FETCH_PROFESSION_REQUEST });
        
        fetch( url+`profession/?idCentre=${app.idCentre}` )
          .then(response => response.json())
          .then(data => {
            dispatch({ type: FETCH_PROFESSION_SUCCESS, payload: data })
            }
            )
          .catch(error => dispatch({ type: FETCH_PROFESSION_FAILURE, payload: error }));
      };

}