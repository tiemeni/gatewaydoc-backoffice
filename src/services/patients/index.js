import app from "../../Configs/app"
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getPatients = async () => {
  try {
    const res = await fetch(BASE_URL + `/patients/?idCentre=${app.idCentre}`);
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const searchPatiens = async (term) =>{
  
  try {
    const res = await fetch(BASE_URL + `/patients/search/${term}?idCentre=${app.idCentre}`);
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}


export const getPatient = async (id) => {
  try {
    const res = await fetch(BASE_URL + `/patients/${id}/?idCentre=${app.idCentre}`);
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const createPatient = async (payload) => {
  // const keys = Object.keys(payload);
  // const formData = new FormData();
  // for (const key of keys) {
  //   formData.append(key, payload[key]);
  // }

  try {
    const res = await fetch(BASE_URL + `/patients/register?idCentre=${app.idCentre}`, {
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
    return { success: false, error: err }
  }
}

export const updatePatient = async (payload, id) => {
  try {
    const res = await fetch(BASE_URL + `/patients/${id}/?idCentre=${app.idCentre}` , {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      },
    })
    const data = await res.json();
    return data
  } catch (err) {
    console.error(err)
    return { success: false, ...err, error: err }
  }
}