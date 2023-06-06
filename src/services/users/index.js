export const getUsers = async () => {
  try {
    const res = await fetch(process.env.REACT_APP_BASE_URL + "/users/getUsers");
    const data = await res.json()
    return { status: true, data: data };
  } catch (err) {
    console.error(err);
    return { status: false, error: err };
  }
};
