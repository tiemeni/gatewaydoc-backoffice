import { Box } from '@mui/material'
import React from 'react'
import GestionLayout from '../../Components/authers/GestionLayout'
import { SearchPraticienFormComponent } from '../../Components/authers/SearchPraticienFormComponent'
import { DATA_TABLE_LIEU_COLONNE, DATA_TABLE_PATIENT_COLONNE } from '../../Constants/dataFields'
import { styles } from './style'
import {DATA_TABLE_LIEUX_COLONNE} from '../../Constants/dataFields';
import { SearchLieuxFormComponent } from '../../Components/authers/SearchLieuxFormComponent';
import Header from '../../Components/authers/Header';

function PageGestionLieux() {
    return (
        <GestionLayout
            searchForm={<SearchPraticienFormComponent />}
            title={"Gestion des lieux"}
            object={"lieu"}
            dataField={DATA_TABLE_LIEU_COLONNE}
            dataInfo={{ user1: ["Yaoundé", "yaoundé", "Centre", "85566", "reff_4554454", "q6sq65sq6s5", "154.1 - 257.5", "yes"] }}
        />
    )
}

export default PageGestionLieux