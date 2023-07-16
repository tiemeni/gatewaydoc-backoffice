import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import GestionLayout from '../../../Components/authers/GestionLayout'
import { SearchPraticienFormComponent } from '../../../Components/authers/SearchPraticienFormComponent';
import { DATA_TABLE_PRATICIEN_COLONNE } from '../../../Constants/dataFields';
import { getCivilities } from "../../../services/civilities";
import { useParams } from "react-router-dom";
import { saveGroups } from "../../../REDUX/groups/actions";
import { getAllGroup } from "../../../services/groups";
import { getAllCivilities } from "../../../services/commons";
import { practitionerFields } from "../../../Constants/fields"
import generatePassword from "../../../helpers/passwordGenerator";
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
      dispatch(savePraticiens(response.data))
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
      {/* <pre className="container">{JSON.stringify(data)}</pre> */}
    </container>
  );
}

export default PageGestionPraticiens;