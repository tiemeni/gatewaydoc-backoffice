import app from "../../Configs/app"
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getUsers = async () => {
  try {
    const res = await fetch(BASE_URL + `/users/?idCentre=${app.idCentre}`);
    const data = await res.json()
    return data;
  } catch (err) {
    return err;
  }
};

export const signUserIn = async (payload) => {
  try {
    const res = await fetch(BASE_URL + "/users/signin", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json()
    return { status: true, data: data };
  } catch (err) {
    console.error(err);
    return { status: false, error: err };
  }
};

export const createUser = async (payload) => {
  // const keys = Object.keys(payload);
  // const formData = new FormData();
  // for (const key of keys) {
  //   formData.append(key, payload[key]);
  // }

  try {
    const res = await fetch(BASE_URL + "/users/register", {
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


export const isValidToken = async (token) => {
  try {
    const res = await fetch(BASE_URL + "/verifyToken", {
      method: "POST",
      body: JSON.stringify(token),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json()
    return data.success
  } catch (err) {
    console.error("------------",err);
    window.location = "/"
    return false
  }
}
export const updateUser = async (payload, id) => {
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
