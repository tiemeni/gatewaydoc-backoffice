const BASE_URL = process.env.REACT_APP_BASE_URL;


export const getSpecialities = async () => {
    try {
        const res = await fetch(BASE_URL + "/specialites/");
        const data = await res.json()
        return data;
    } catch (err) {
        return err;
    }
}


export const createSpeciality = async (payload) => {
    try {
        const res = await fetch(BASE_URL + "/specialites/", {
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


export const updateSpeciality = async (payload, specId) => {
    try {
        const res = await fetch(BASE_URL + `/specialites/${specId}`, {
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