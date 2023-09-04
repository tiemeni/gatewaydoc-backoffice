import axios from "axios";
import app from "../../Configs/app";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getCivilities = async () => {
  try {
    const data = await axios({
      method: "GET",
      url: BASE_URL + "/civilites/",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return { success: false, error: error };
      });
    return data;
  } catch (err) {
    return err;
  }
};

export const getCivility = async (id) => {
  

    
  const res = await fetch( `${BASE_URL}/civilites/${id}?idCentre=${app.idCentre}` );
  const data = await res.json()
  return data;

}

export const createCivilites = async (payload) => {
  try {
      const res = await fetch(BASE_URL + `/civilites/?idCentre=${app.idCentre}`, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
              "Content-Type": "application/json"
          }
      });
      const data = await res.json()
      return data;
  } catch (err) {
      return err;
  }
}


export const updateCivilites = async (payload, specId) => {
  try {
      const res = await fetch(BASE_URL + `/civilites/${specId}/?idCentre=${app.idCentre}` , {
          method: "PATCH",
          body: JSON.stringify(payload),
          headers: {
              "Content-Type": "application/json"
          }
      });
      const data = await res.json()
      return data;
  } catch (e) {
      return e
  }
}