const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getUsers = async () => {
  try {
    const res = await fetch(BASE_URL + "/users/");
    const data = await res.json()
    return data;
  } catch (err) {
    return err;
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