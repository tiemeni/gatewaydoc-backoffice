/**
 *  Une Action est un objet qui decrit un changement à appliquer dans le store local (le state)
 */


import axios from "axios";

import {
  FETCH_PRATICIENS_REQUEST,
  FETCH_PRATICIENS_SUCCESS,
  FETCH_PRATICIENS_FAILURE,
} from "./types";
import app from "../../Configs/app";

export const getPraticiens = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_PRATICIENS_REQUEST });
        const BASE_URL = process.env.REACT_APP_BASE_URL;
        axios({
            method: "GET",
            url: BASE_URL + "/users/",
            params: {
                isPraticien: true,
                idCentre: app.idCentre
            },
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            let praticiens = response.data.data;
            dispatch({
              type: FETCH_PRATICIENS_SUCCESS,
              payload: { success: true, data: praticiens },
            });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
            /* axios({
              method: "GET",
              url: BASE_URL + "/civilites/",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
              .then((resp) => {
                praticiens.forEach((prati) => {
                  let civ = resp.data.filter(
                    (item) => item._id === prati.civility
                  );
                  prati["label_civility"] = civ.length > 0 ? civ[0].label : "";
                });
                dispatch({
                  type: FETCH_PRATICIENS_SUCCESS,
                  payload: { success: true, data: praticiens},
                });
              })
              .catch((err) => {
                dispatch({ type: FETCH_PRATICIENS_FAILURE, payload: err });
              }); */
        })
        .catch((error) => {
            dispatch({ type: FETCH_PRATICIENS_FAILURE, payload: error });
        });
    };
};