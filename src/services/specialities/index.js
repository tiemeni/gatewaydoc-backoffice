import app from "../../Configs/app"
const BASE_URL = process.env.REACT_APP_BASE_URL;


export const getSpecialities = async () => {
    try {
        const res = await fetch(BASE_URL + `/specialites/?idCentre=${app.idCentre}`);
        const data = await res.json()
        return data;
    } catch (err) {
        return err;
    }
}


export const createSpeciality = async (payload) => {
    try {
        const res = await fetch(BASE_URL + `/specialites/?idCentre=${app.idCentre}`, {
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

export const getSpeciality = async (id) => {
    try {
        const res = await fetch(BASE_URL + `/specialites/${id}?idCentre=${app.idCentre}`, {
            method: "GET",
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

export const updateSpeciality = async (payload, specId) => {
    try {
        const res = await fetch(BASE_URL + `/specialites/${specId}/?idCentre=${app.idCentre}` , {
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