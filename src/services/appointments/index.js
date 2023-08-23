

import axios from "axios"

import app from "../../Configs/app";

const BASE_URL = process.env.REACT_APP_BASE_URL;
export const getAppointements = async (filter)=>{
    const { data } =  await axios({
        method: "GET",
        url: BASE_URL + "/appointments/rechercher_dispo/",
        params: {
         
            idCentre: app.idCentre,
            ...filter,
         
        },
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
    return data;
}