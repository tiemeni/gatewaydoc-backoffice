import { Box } from '@mui/material'
import React from 'react'
import GestionLayout from '../../Components/authers/GestionLayout'
import { styles } from './style'
import {DATA_TABLE_LIEUX_COLONNE} from '../../Constants/dataFields';
import { SearchLieuxFormComponent } from '../../Components/authers/SearchLieuxFormComponent';
import Header from '../../Components/authers/Header';

function PageGestionLieux() {
    return (<>
        <Header/>
    
        <GestionLayout
            searchForm={<SearchLieuxFormComponent/>} 
            title={'Gestion des lieux'}
            object={"lieux"}
            dataField={DATA_TABLE_LIEUX_COLONNE}
            dataInfo={{user1: ["42", "Atangana.com", "ATG", "Mvog Mbi", "Mvog Atangana Mballa", "404", "Yaounde", "6 78 32 12 54", "oui", "oui", "13", "100", "12332.213", "12332.213"]}}

        />
    </>
    )
}

export default PageGestionLieux