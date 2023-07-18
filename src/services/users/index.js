const BASE_URL = process.env.REACT_APP_BASE_URL;
const idc = localStorage.getItem("idc");

export const getUsers = async () => {
  try {
    const res = await fetch(BASE_URL + "/users/?idCentre=" + idc, {
      credentials: "include"
    });
    const data = await res.json()
    return data;
  } catch (err) {
    return err;
  }
};

export const signUserIn = async (payload, idc) => {
  try {
    const res = await fetch(BASE_URL + "/users/signin/?idCentre=" + idc, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json()
    return data;
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
    const res = await fetch(BASE_URL + "/users/register/?idc=" + idc, {
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
    console.error("------------", err);
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
        "Content-Type": "application/json",
      }
    })
    const data = await res.json();
    return data
  } catch (err) {
    console.error(err)
    return { status: false, error: err }
  }
}
