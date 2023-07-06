import React from 'react'
import GestionLayout from '../../Components/authers/GestionLayout';
import { SearchPraticienFormComponent } from '../../Components/authers/SearchPraticienFormComponent';
import { DATA_TABLE_MOTIF_COLONNE, DATA_TABLE_SPECIALITE_COLONNE } from '../../Constants/dataFields';

function PageGestionSpecialites() {
    return (
        <GestionLayout
            searchForm={<SearchPraticienFormComponent />}
            title={"Gestion des spécialités"}
            object={"spécialité"}
            dataField={DATA_TABLE_SPECIALITE_COLONNE}
            dataInfo={{ user1: ["chirugien", "chirugien", "ref-5q4s54qs54", "yes", "5qs454q5s4q", "5q45qs45q4s54qs5"] }}
        />
    )
}

export default PageGestionSpecialites