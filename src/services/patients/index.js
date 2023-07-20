const BASE_URL = process.env.REACT_APP_BASE_URL;
const idc = localStorage.getItem("idc");


export const getPatients = async () => {
  try {
    const res = await fetch(BASE_URL + "/patients/?idCentre=" +idc);
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const createPatient = async (payload) => {

  try {
    const res = await fetch(BASE_URL + "/patients/register/?idCentre=" +idc, {
      method: 'POST',
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

export const updatePatient = async (payload, id) => {
  try {
    const res = await fetch(BASE_URL + `/patients/${id}/?idCentre=` +idc, {
      method: 'PUT',
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