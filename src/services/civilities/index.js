import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getCivilities = async () => {
  try {
    const data = await axios({
      method: "GET",
      url: BASE_URL + "/civilites/",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return { success: false, error: error };
      });
    return data;
  } catch (err) {
    return err;
  }
};
