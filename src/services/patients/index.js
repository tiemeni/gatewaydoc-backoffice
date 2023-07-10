const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getPatients = async () => {
  try {
    const res = await fetch(BASE_URL + "/patients/");
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const createPatient = async (payload) => {
  // const keys = Object.keys(payload);
  // const formData = new FormData();
  // for (const key of keys) {
  //   formData.append(key, payload[key]);
  // }

  try {
    const res = await fetch(BASE_URL + "/patients/register", {
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
    const res = await fetch(BASE_URL + "/patients/" + id, {
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