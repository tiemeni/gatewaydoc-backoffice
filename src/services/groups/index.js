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