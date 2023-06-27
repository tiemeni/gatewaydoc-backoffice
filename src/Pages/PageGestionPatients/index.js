import React, { useState } from 'react'
import GestionLayout from '../../Components/authers/GestionLayout'
import Header from '../../Components/authers/Header'
import { SearchPatientFormComponent } from '../../Components/authers/SearchPatientFormComponent'
import {DATA_TABLE_PATIENT_COLONNE} from "../../Constants/dataFields"
 
function PageGestionPatients() {
    const [isLoading, setIsLoading] = useState(false)

    const searchPatient = () =>{

    }

    return (<>
        <Header />
    
        <GestionLayout
            title="Gestion des patients"
            object="patients"
            searchForm={<SearchPatientFormComponent/>}
            dataField= {DATA_TABLE_PATIENT_COLONNE}
            dataInfo={{user1: ["Mme", "Atangana", "Evodie", "Atanganaevodie21@gmail.com", "6 78 43 21 84", "fiche", "Actif", "Oui"]}}
        />
    </>
    )
}

export default PageGestionPatients