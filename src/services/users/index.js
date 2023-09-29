import app from "../../Configs/app"
import generatePassword from "../../helpers/passwordGenerator";
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
    const res = await fetch(BASE_URL + "/users/signin?idCentre=" + app.idCentre, {
      method: "POST",
      body: JSON.stringify({ email: payload.email, password: payload.password }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json()
    return { status: true, data: data, ...data };
  } catch (err) {
    console.error(err);
    return { status: false, error: err, ...err };
  }
};

export const createUser = async (payload) => {
  // const keys = Object.keys(payload);
  // const formData = new FormData();
  // for (const key of keys) {
  //   formData.append(key, payload[key]);
  // }
  let body = new FormData()
  
  const keys = Object.keys(payload)
  for(let key of keys){
    if( typeof payload[key] !== 'object' || ! payload[key] instanceof FileList ){
      body.append(key,payload[key])
    }else{
      Array.from(payload[key]).forEach((file)=>{
        body.append(key,file);
      });

    }
    
  }
  try {
    const res = await fetch(BASE_URL + `/users/register?idCentre=${app.idCentre}`, {
      method: 'POST',
      body: JSON.stringify({ isPraticien: false, password: generatePassword(), ...Object.fromEntries(body.entries())}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json();
    return data
  } catch (err) {
    console.error(err)
    return { status: false, error: err, ...err }
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


export const getUser = async (id) => {
  try {
    const res = await fetch(BASE_URL + `/users/${id}?idCentre=${app.idCentre}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json();
    return data
  } catch (err) {

    return { status: false, error: err, ...err }
  }
}

export const updateUser = async (payload, id) => {
  try {
    const res = await fetch(BASE_URL + `/users/${id}?idCentre=${app.idCentre}`, {
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
    return { status: false, error: err, ...err }
  }
}
