import React from 'react'
import GestionLayout from '../../Components/authers/GestionLayout'
import { SearchPraticienFormComponent } from '../../Components/authers/SearchPraticienFormComponent'
import { DATA_TABLE_LIEU_COLONNE, DATA_TABLE_MOTIF_COLONNE } from '../../Constants/dataFields'
import { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getAllMotif, saveMotifs } from '../../REDUX/motifs/actions'
import { getMotifs } from '../../services/motif'

function GestionMotifs() {
  const [isLoading, setIsLoading] = React.useState(true);
  const motifListe = useSelector((state) => state.Motifs.motifs)
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getMotifs();

      if (response.success !== true) {
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      dispatch(saveMotifs(response.data))
    }
    fetchData()
  }, [])

  return (<>
    <GestionLayout
      searchForm={<SearchPraticienFormComponent />}
      title={"Gestion des motifs"}
      object={"motif"}
      dataField={DATA_TABLE_MOTIF_COLONNE}
      dataInfo={motifListe}
    />
  </>

  )

}

export default GestionMotifs;