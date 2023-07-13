import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getCivilities = async () => {
  try {
    const response = await axios({
      url: BASE_URL + "/civilites/",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      params: {
        idCentre: "649aacd0c7542f87284daefd",
      },
    });
    return response.data;
  } catch (error) {
    return { success: false, error: error };
  }
};
