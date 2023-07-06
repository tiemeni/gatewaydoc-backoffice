import React from 'react'
import GestionLayout from '../../Components/authers/GestionLayout/index.js'
import { SearchPraticienFormComponent } from '../../Components/authers/SearchPraticienFormComponent/index.js'
import { DATA_TABLE_GROUPE_COLONNE } from '../../Constants/dataFields.js'
// import { styles } from './style.js'

function PageGestionGroupesDroits() {
    return (
        <GestionLayout
            searchForm={<SearchPraticienFormComponent />}
            title={"Gestion des groupes"}
            object={"groupe"}
            dataField={DATA_TABLE_GROUPE_COLONNE}
            dataInfo={{ user1: ["Administrateur de structure", "Utilisateur ayant le plus grand nombre de droit d'action"] }}
        />
    )
}

export default PageGestionGroupesDroits