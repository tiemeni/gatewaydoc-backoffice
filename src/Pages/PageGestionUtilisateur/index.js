import React from 'react'
import GestionLayout from '../../Components/authers/GestionLayout';
import { SearchLieuxFormComponent } from '../../Components/authers/SearchLieuxFormComponent';
import {DATA_TABLE_USERS_COLONNE} from "../../Constants/dataFields"
import Header from '../../Components/authers/Header';

function PageGestionUtilisateur() {
    return (
        <>
        <Header/>
        <GestionLayout
            title={"Gestion des utilisateurs"}
            object={"utilisateurs"}
            dataField={DATA_TABLE_USERS_COLONNE}
            dataInfo={{user1: ["Ophthalmologie","Enseignant", "Enseignant", "AH", "ENS", "Marc", "ensMat.@gmail.com", "Administrateur de structure", "", "","", "", "", "Modfier"]}}
        />
        </>
    )
}

export default PageGestionUtilisateur