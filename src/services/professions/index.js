import app from "../../Configs/app"
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getAllProfessions = async () => {
  

    
    const res = await fetch( `${BASE_URL}/profession/?idCentre=${app.idCentre}` );
    const data = await res.json()
    return data;

}
