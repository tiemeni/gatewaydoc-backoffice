const BASE_URL = process.env.REACT_APP_BASE_URL;
const idc = localStorage.getItem("idc")

export const getAllGroup = async () => {
    try {
        const res = await fetch(BASE_URL + "/groupes/?idCentre=" + idc);
        const data = await res.json();
        return data;
    } catch (error) {
        return error;
    }
}