import app from "../../Configs/app"
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getAllGroup = async () => {
    try {
        const res = await fetch(`${BASE_URL}/groupes/?idCentre=${app.idCentre}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error;
    }
}

export const getGroup = async (id) => {
    
    const res = await fetch( `${BASE_URL}/groupes/${id}?idCentre=${app.idCentre}` );
    const data = await res.json()
    return data;
  
  }
  export const createGroup = async (payload) => {
      // const keys = Object.keys(payload);
      // const formData = new FormData();
      // for (const key of keys) {
      //   formData.append(key, payload[key]);
      // }
    
      try {
        const res = await fetch(`${BASE_URL}/groupes?idCentre=${app.idCentre}`, {
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
        return { status: false, error: err }
      }
    }
   
  
    export const updateGroup = async (payload, id) => {
      try {
        const res = await fetch(BASE_URL + "/groupes/" + id, {
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
        return { status: false, error: err }
      }
    }
    