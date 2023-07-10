import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GestionLayout from '../../Components/authers/GestionLayout'
import { SearchPraticienFormComponent } from '../../Components/authers/SearchPraticienFormComponent'
import { DATA_TABLE_PATIENT_COLONNE, DATA_TABLE_PRATICIEN_COLONNE } from '../../Constants/dataFields'
import { savePatients } from '../../REDUX/patients/actions'
import { getPatients } from '../../services/patients'

function PageGestionPatients() {
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
            searchForm={<SearchPraticienFormComponent />}
            title={"Gestion des patients"}
            object={"patient"}
            dataField={DATA_TABLE_PATIENT_COLONNE}
            dataInfo={patients}
        />
    )
}

export default PageGestionPatients