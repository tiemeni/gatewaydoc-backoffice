const BASE_URL = process.env.REACT_APP_BASE_URL;
const idc = localStorage.getItem("idc");


export const getPraticiens = async () => {
    try {
        const res = await fetch(BASE_URL + "/users/?idCentre=" + idc + "&&isPraticien=true");
        const data = await res.json()
        return data;
    } catch (err) {
        return err;
    }
};

export const createPraticien = async (payload) => {

    try {
        const res = await fetch(BASE_URL + "/users/register", {
            method: 'POST',
            body: JSON.stringify({ ...payload, isPraticien: true }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json();
        return data
    } catch (err) {
        console.error(err)
        return { status: false, error: err }
    }
}

export const updatePraticien = async (payload, id) => {
    try {
      const res = await fetch(BASE_URL + "/users/" + id, {
        method: 'PATCH',
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await res.json();
      return data
    } catch (err) {
      console.error(err)
      return { status: false, error: err }
    }
  }
