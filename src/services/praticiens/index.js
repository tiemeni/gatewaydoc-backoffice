/**
 *  Les services sont en fait des callouts destiné à vous produire des données qui vont aller dans le store
 */
import axios from "axios";
import app from "../../Configs/app";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const idc = localStorage.getItem("idc");






/**
 * Enregistrer les données dans les serveur.
 * @param {*} datas
 * @returns Object
 */


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
            idCentre: app.idCentre
          },
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
   
    const data = response.data;
    return data
  } catch (err) {
    console.error(err)
    return { status: false, error: err, ...err }
  }
}

export const getPraticiens = async () => {
  const res = await axios({
      method: "GET",
      url: BASE_URL + `/users/`,
      params: {
          isPraticien: true,
          idCentre: app.idCentre
      },
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },
  });

  return res.data;
};

export const getPraticien = async (id) => {
  const res = await axios({
      method: "GET",
      url: BASE_URL + `/users/${id}`,
      params: {
          isPraticien: true,
          idCentre: app.idCentre
      },
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },
  });
  return res.data;
};
export const getPraticiensByJob = async () => {
  try {
      const res = await fetch(BASE_URL + "/users/profession/?isPraticien=true&idCentre=" + app.idCentre );
      const data = await res.json()
      return data;
  } catch (err) {
      return err;
  }
};

export const editPraticien = async (payload, id) => {
  try {
    const res = await fetch(BASE_URL + "/users/" + id + "/?idCentre=" + idc, {
      method: 'PATCH',
      body: JSON.stringify({...payload}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json();
    return data
  } catch (err) {
    console.error(err)
    return { status: false, error: err, ...err }
  }
}

export const createPraticien = async (payload) => {

  try {
      const res = await fetch(BASE_URL + "/users/register/?idCentre=" + idc, {
        method: "POST",
        body: JSON.stringify({ ...payload, isPraticien: true}),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      return data
  } catch (err) {
      console.error(err)
      return { status: false, error: err, ...err }
  }
}
