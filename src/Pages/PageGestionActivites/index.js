import { Box } from '@mui/material'
import React from 'react'
import GestionLayout from '../../Components/authers/GestionLayout'
import { styles } from './style'
import Header from '../../Components/authers/Header';

function PageGestionActivites() {
    return (<>
        <Header/>
    
        <GestionLayout
            title={'Gestion des activités'}
            object={"activités"}

        />
    </>
    )
}

export default PageGestionActivites