/**
*  Les services sont en fait des callouts destiné à vous produire des données qui vont aller dans le store
*/
import { options } from "@fullcalendar/core/preact";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;





/**
* Enregistrer les données dans les serveur.
* @param {*} datas
* @returns Object
*/
export const createPraticien = async (donneePraticien = new Array()) => {
	var __donneePraticien = Object.assign({}, donneePraticien);
	__donneePraticien["isPraticien"] = true;
	try {
		const response = await axios({
			url: BASE_URL + "/users/",
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			data: __donneePraticien,
		});
		return response.data;
	} catch (error) {
		return { success: false, error: error };
	}
};



export const editPraticien = async (id_praticien, modifications = new Array()) => {
	var __modifications = Object.assign({}, modifications);
	__modifications["isPraticien"] = true;
	try {
		const response = await axios({
			url: BASE_URL + "/users/" + id_praticien,
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			data: __modifications,
		});
		return response.data;
	} catch (error) {
		return { success: false, error: error };
	}
};


export const getAllPraticiens = async (options = new Array()) => {
	var __options = Object.assign({}, options);
	__options["isPraticien"] = true;
	try {
		const response = await axios({
			url: BASE_URL + "/users/",
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			params: __options,
		});
		return response.data;
	} catch (error) {
		return { success : false, error : error};
	}
};


/**
* Lire de information d'un praticien donnée
* @param {*} id_praticien 
* @returns 
*/
export const getPraticienById = async (id_praticien) => {
	try {
		const response = await axios({
			method: "GET",
			url: BASE_URL + "/users/" + id_praticien,
			params: {
				isPraticien: true,
			},
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		
		const data = await response.json();
		return data
	} catch (err) {
		console.error(err)
		return { status: false, error: err }
	}
}
