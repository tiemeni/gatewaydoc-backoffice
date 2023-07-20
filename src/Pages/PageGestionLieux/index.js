import React from 'react'
import GestionLayout from '../../Components/authers/GestionLayout'
import { SearchPraticienFormComponent } from '../../Components/authers/SearchPraticienFormComponent'
import { DATA_TABLE_LIEU_COLONNE, DATA_TABLE_PATIENT_COLONNE } from '../../Constants/dataFields'
import { styles } from './style'
import { DATA_TABLE_LIEUX_COLONNE } from '../../Constants/dataFields';
import { SearchLieuxFormComponent } from '../../Components/authers/SearchLieuxFormComponent';
import { getAllLieux, saveLieu } from '../../REDUX/lieux/action'
import { connect, useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getLieux } from '../../services/lieu'
import { useLocation } from "react-router-dom";


function useQuery() {
  const { search } = useLocation();

  return new URLSearchParams(search);
}

function PageGestionLieux({ data, loading, error }) {

  const [isLoading, setIsLoading] = React.useState(true);
  const lieuList = useSelector((state) => state.Lieux.lieux)
  const dispatch = useDispatch();
  const idc = useQuery().get("idc")


  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getLieux(idc);

      if (response.success !== true) {
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      dispatch(saveLieu(response.data))
    }
    fetchData()
  }, [])

  return (
    <GestionLayout
      searchForm={<SearchPraticienFormComponent />}
      title={"Gestion des lieux"}
      object={"lieu"}
      dataField={DATA_TABLE_LIEU_COLONNE}
      dataInfo={lieuList}
    />
  )
}


export default PageGestionLieux