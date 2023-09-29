import app from "../../Configs/app"
const BASE_URL = process.env.REACT_APP_BASE_URL;


export const getAllLieux = async () => {
    
    const res = await fetch( `${BASE_URL}/lieu/?idCentre=${app.idCentre}` );
    const data = await res.json()
    return data;

}
export const getLieu = async (id) => {
    
  const res = await fetch( `${BASE_URL}/lieu/${id}?idCentre=${app.idCentre}` );
  const data = await res.json()
  return data;

}
export const createLieu = async (payload) => {
    // const keys = Object.keys(payload);
    // const formData = new FormData();
    // for (const key of keys) {
    //   formData.append(key, payload[key]);
    // }
  
    try {
      const res = await fetch(`${BASE_URL}/lieu/register?idCentre=${app.idCentre}`, {
        method: 'POST',
        body: JSON.stringify(payload),
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
 

  export const updateLieu = async (payload, id) => {
    try {
      const res = await fetch(BASE_URL + `/lieu/${id}?idCentre=${app.idCentre}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
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
  