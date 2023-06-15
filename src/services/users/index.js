const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getUsers = async () => {
  try {
    const res = await fetch(BASE_URL + "/users/getUsers");
    const data = await res.json()
    return { status: true, data: data };
  } catch (err) {
    console.error(err);
    return { status: false, error: err };
  }
};

export const createUser = async (payload) => {
  const keys = Object.keys(payload);
  const formData = new FormData();
  for (const key of keys) {
    formData.append(key, payload[key]);
  }

  try {
    const res = await fetch(BASE_URL + "/users/register", {
      method: 'POST',
      body: formData,
    })
  } catch (err) {
    console.error(err)
    return { status: false, error: err }
  }
}
