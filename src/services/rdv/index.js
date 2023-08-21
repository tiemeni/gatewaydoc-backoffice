
import app from "../../Configs/app"
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const deleteRDV = async (id) => {
  


    const res = await fetch(`${BASE_URL}/appointments/${id}/?idCentre=${app.idCentre}`,{ method: 'DELETE' });
    const data = await res.json()
    return data;

}

export const updateRDV = async (id, body)=>{
    const res = await fetch(`${BASE_URL}/appointments/${id}/?idCentre=${app.idCentre}`,{ method: 'PUT',  body });
    const data = await res.json()
    return data;
}