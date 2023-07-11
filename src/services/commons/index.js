const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getAllCivilities = async () => {
    try {
        const res = await fetch(BASE_URL + "/civilites/");
        const data = await res.json();
        return data;
    } catch (error) {
        return error;
    }
}

export const deleteIntance = async (entity, id) => {
    try {
        const res = await fetch(BASE_URL + `/${entity}/${id}`, {
            method: 'DELETE',
            headers: {
              "Content-Type": "application/json"
            }
          });
        const data = await res.json();
        return data;
    } catch (error) {
        return error;
    }
}