import React, { useState } from 'react'
import GestionLayout from '../../Components/authers/GestionLayout'
import { SearchPraticienFormComponent } from '../../Components/authers/SearchPraticienFormComponent'
import { DATA_TABLE_PATIENT_COLONNE, DATA_TABLE_PRATICIEN_COLONNE } from '../../Constants/dataFields'

function PageGestionPatients() {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <GestionLayout
            searchForm={<SearchPraticienFormComponent />}
            title={"Gestion des patients"}
            object={"patient"}
            dataField={DATA_TABLE_PATIENT_COLONNE}
            dataInfo={{ user1: ["M", "Tiemeni hapi", "Christian", "17-01-2001", "658686162", "tiemanirocket@gmail.com", "N5s4d5s4d5son", "04/03/2023", "photo.jpg", "yes", "id_droit"] }}
        />
    )
}

export default PageGestionPatients