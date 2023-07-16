const BASE_URL = process.env.REACT_APP_BASE_URL;


export const getLieux = async () => {
    try {
        const res = await fetch(BASE_URL + "/lieu/");
        const data = await res.json()
        return data;
    } catch (err) {
        return err;
    }
}


export const createLieux = async (payload) => {
    try {
        const res = await fetch(BASE_URL + "/lieu/register", {
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


export const updateLieu = async (payload, lieuId) => {
    try {
        const res = await fetch(BASE_URL + `/lieu/${lieuId}`, {
            method: "PUT",
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