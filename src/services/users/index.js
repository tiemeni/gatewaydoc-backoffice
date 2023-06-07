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

export const createUser = (payload) => {
  const formData = new FormData()

  fetch(BASE_URL + "/users/signin", {
    method: 'POST',
    body: formData
  })
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.error(err)
    return { status: false, error: err }
  })
}
