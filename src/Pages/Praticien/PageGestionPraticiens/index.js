import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import GestionLayout from '../../../Components/authers/GestionLayout'
import { SearchPraticienFormComponent } from '../../../Components/authers/SearchPraticienFormComponent';
import { DATA_TABLE_PRATICIEN_COLONNE } from '../../../Constants/dataFields';
import { getPraticiens } from "../../../services/praticiens";
import { savePraticiens } from "../../../REDUX/praticiens/actions"

function PageGestionPraticiens({ data, loading, error }) {
  const praticiensList = useSelector((state) => state.Praticiens.praticiens)
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function fetchData() {
      const response = await getPraticiens();
      console.log(response)
      if (response.success !== true) {
        return;
      }
      response.data.forEach((item) => {
        item["label_civility"] = item.civility.label;
      });
      dispatch(savePraticiens(response.data));
    }
    fetchData()
  }, [])


  return (
    <container maxWidth="md">
      <GestionLayout
        searchForm={<SearchPraticienFormComponent />}
        title={"Gestion des praticiens"}
        object={"praticien"}
        dataField={DATA_TABLE_PRATICIEN_COLONNE}
        dataInfo={praticiensList}
      />
    </container>
  );
}

export default PageGestionPraticiens;