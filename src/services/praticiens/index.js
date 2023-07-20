/**
 *  Les services sont en fait des callouts destiné à vous produire des données qui vont aller dans le store
 */
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;





/**
 * Enregistrer les données dans les serveur.
 * @param {*} datas
 * @returns Object
 */
export const createPraticien = (datas) => {
    return { success: true, data: [] };
}



export const editPraticien = (id_praticien, datas) => {
  return {success : true, data: []};
};


export const getAllPraticiens = (Options) => {
  return { success: true, data: [] };
};


/**
 * Lire de information d'un praticien donnée
 * @param {*} id_praticien 
 * @returns 
 */
export const getPraticienById = async (id_praticien) => {
    try {
        const response = await axios({
          method: "GET",
          url: BASE_URL + "/users/" + id_praticien,
          params: {
            isPraticien: true,
          },
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
   
    const data = await response.json();
    return data
  } catch (err) {
    console.error(err)
    return { status: false, error: err }
  }
}
