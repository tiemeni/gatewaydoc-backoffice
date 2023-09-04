import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GestionLayout from '../../Components/authers/GestionLayout'
import { SearchRecapPaiement } from '../../Components/authers/SearchRecapPaiement'
import { DATA_TABLE_PAIEMENT_COLONNE, DATA_TABLE_PRATICIEN_COLONNE } from '../../Constants/dataFields'
import { savePatients } from '../../REDUX/patients/actions'
import { getPatients } from '../../services/patients'

function PageGestionPaiement() {
    const [isLoading, setIsLoading] = useState(false)
    const patients = useSelector((state) => state.Patients.patients)
    const dispatch = useDispatch();
  
    React.useEffect(() => {
      async function fetchData() {
        setIsLoading(true);
        const response = await getPatients();

        if (response.success !== true) {
          setIsLoading(false);
          return;
        }

        setIsLoading(false);
        
        dispatch(savePatients(response.data))
      }
      fetchData();
    }, [])

    return (
        <GestionLayout
            searchForm={<SearchRecapPaiement />}
            title={"Récapitulatif des paiements"}
            object={"paiements"}
            dataField={DATA_TABLE_PAIEMENT_COLONNE}
            dataInfo={patients}
        />
    )
}

export default PageGestionPaiement