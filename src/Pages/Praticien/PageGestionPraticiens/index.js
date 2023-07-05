import React, { useState } from 'react'
import GestionLayout from '../../../Components/authers/GestionLayout'
import { SearchPraticienFormComponent } from '../../../Components/authers/SearchPraticienFormComponent';
import { DATA_TABLE_PRATICIEN_COLONNE } from '../../../Constants/dataFields';
import styles from './style';

function PageGestionPraticiens() {
    const [isLoading, setIsLoading] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open);
    };


    return (
        <GestionLayout
            searchForm={<SearchPraticienFormComponent />}
            title={"Gestion des praticiens"}
            object={"praticien"}
            dataField={DATA_TABLE_PRATICIEN_COLONNE}
            dataInfo={{ user1: ["M", "Oncologue", "Dongmo", "Donald", "q5s4q54sq5s4q54", "Non", "04/03/2023", "Oui", "Administrateur", "Cabinet 12", "2.500"] }}
        />
    )
}

export default PageGestionPraticiens;