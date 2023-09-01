import app from "../../Configs/app"
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getAllProfessions = async () => {
  

    
    const res = await fetch( `${BASE_URL}/profession/?idCentre=${app.idCentre}` );
    const data = await res.json()
    return data;

}

export const getProfession = async (id) => {
  

    
    const res = await fetch( `${BASE_URL}/profession/${id}?idCentre=${app.idCentre}` );
    const data = await res.json()
    return data;

}

export const createProfession = async (payload) => {
    try {
        const res = await fetch(BASE_URL + `/profession/?idCentre=${app.idCentre}`, {
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


export const updateProfession = async (payload, specId) => {
    try {
        const res = await fetch(BASE_URL + `/profession/${specId}/?idCentre=${app.idCentre}` , {
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