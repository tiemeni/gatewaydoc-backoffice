const BASE_URL = process.env.REACT_APP_BASE_URL;
const idc = localStorage.getItem("idc");


export const getEvents = async () => {
    try {
        const res = await fetch(BASE_URL + "/appointments/?idCentre=" +idc );
        const data = await res.json()
        return data;
    } catch (err) {
        return err;
    }
}

export const getEventsByPractionner = async (idp) => {
    try {
        const res = await fetch(BASE_URL + "/appointments/?idCentre=" +idc+"&idp="+idp );
        const data = await res.json()
        return data;
    } catch (err) {
        return err;
    }
}