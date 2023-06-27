import { Box } from '@mui/material'
import React from 'react'
import GestionLayout from '../../Components/authers/GestionLayout'
import { styles } from './style'
import { SearchDroitGroupeComponent } from '../../Components/authers/SearchDroitGroupeComponent';
import Header from '../../Components/authers/Header';
import {DATA_TABLE_DROIT_GROUPE_COLONNE} from '../../Constants/dataFields';

function PageGestionGroupesDroits() {
    return (<>
        <Header/>
    
        <GestionLayout
            searchForm={<SearchDroitGroupeComponent/>} 
            title={'Gestion des droits et groupes'}
            object={"droits et groupes"}
            dataField={DATA_TABLE_DROIT_GROUPE_COLONNE}
            dataInfo={{user1: ["Administrateur de structure"]}}

        />
    </>
    )
}

export default PageGestionGroupesDroits