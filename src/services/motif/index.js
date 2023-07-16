const BASE_URL = process.env.REACT_APP_BASE_URL;


export const getMotifs = async () => {
    try {
        const res = await fetch(BASE_URL + "/motif/");
        const data = await res.json()
        return data;
    } catch (err) {
        return err;
    }
}


export const createMotif = async (payload) => {
    try {
        const res = await fetch(BASE_URL + "/motif/register", {
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


export const updateMotif = async (payload, motifId) => {
    try {
        const res = await fetch(BASE_URL + `/motif/${motifId}`, {
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