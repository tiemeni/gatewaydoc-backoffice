import axios from "axios";
import app from "../../Configs/app"
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getAllMotif = async () => {

  const res = await fetch( `${BASE_URL}/profession/?idCentre=${app.idCentre}` );
  const data = await res.json()
  return data;

}
export const createMotif = async (payload) => {
  // const keys = Object.keys(payload);
  // const formData = new FormData();
  // for (const key of keys) {
  //   formData.append(key, payload[key]);
  // }

  try {
    const res = await fetch(BASE_URL + `/motifs?idCentre=${app.idCentre}`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json();
    return { status: true, data };
  } catch (err) {
    console.error(err)
    return { status: false, error: err }
  }
}

export const editMotif = async (payload, id) => {
  try {
    const res = await fetch(BASE_URL + `/motifs/${id}/?idCentre=${app.idCentre}` , {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      },
    })
    const data = await res.json();
    return { status: true, data }
  } catch (err) {
    console.error(err)
    return { status: false, error: err }
  }
}

export const motifsByProfession = async (profession)=>{
  try{
    const response = await  axios({
      method: "GET",
      url: BASE_URL + `/motif/profession/${profession}`,
      params: {                  
          idCentre: app.idCentre,
      },
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },
  })
    const data = response.data;
    return { status: true, data }
  }catch(e){
    return { status: false, error: e }
  }
  
}