import React from 'react'
import GestionLayout from '../../Components/authers/GestionLayout';
import { SearchLieuxFormComponent } from '../../Components/authers/SearchLieuxFormComponent';
import {DATA_TABLE_SPECIALITE_COLONNE} from "../../Constants/dataFields"
import Header from '../../Components/authers/Header';
function PageGestionSpecialites() {
    return (
        <>
        <Header/>
        <GestionLayout
            title={"Gestion des spéciliatés"}
            object={"spéciliatés"}
            dataField={DATA_TABLE_SPECIALITE_COLONNE}
            dataInfo={{user1: ["Ophthalmologie", "oui", "oui", "oui"]}}
        />
        </>
    )
}

export default PageGestionSpecialites