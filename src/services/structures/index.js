import app from "../../Configs/app"
const BASE_URL = process.env.REACT_APP_BASE_URL;


export const getStructures = async () => {
    try {
        const res = await fetch(BASE_URL + `/structure/?idCentre=${app.idCentre}`);
        const data = await res.json()
        return data;
    } catch (err) {
        return err;
    }
}

export const getStructure = async (id) => {
    try {
        const res = await fetch(BASE_URL + `/structure/${id}?idCentre=${app.idCentre}`);
        const data = await res.json()
        return data;
    } catch (err) {
        return err;
    }
}

export const createStructure = async (payload) => {
    try {
        const res = await fetch(BASE_URL + `/structure/register/?idCentre=${app.idCentre}`, {
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


export const updateStructure = async (payload, specId) => {
    try {
        const res = await fetch(BASE_URL + `/structure/${specId}/?idCentre=${app.idCentre}` , {
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