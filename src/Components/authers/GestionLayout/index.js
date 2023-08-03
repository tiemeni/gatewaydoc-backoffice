import {
    Box,
    CircularProgress,
    Grid,
    Typography
} from '@mui/material'
import React, { useState } from 'react'
import styles from './style'
import UsersLayout from '../../../layout/usersLayout'
import SearchAccordion from '../../../Components/authers/SearchAccordion'
import { Link } from 'react-router-dom'
import { AddCircle } from '@mui/icons-material'
import { Button } from 'react-bootstrap'
import { DataTable } from '../DataTableComponent'

function GestionLayout({
    title,
    object,
    addFunction = null,
    dataField = [],
    dataInfo = [],
    editeFonction,
    deleteFonction,
    searchForm = null,
    searchFonction
}) {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <UsersLayout
            title={title ?? "Gestion des Objects"}>
            <Grid item xs={12} px={2}>
                <SearchAccordion
                    title={object ? "Rechercher un " + object : "Rechercher un Object"}>
                    {searchForm}
                </SearchAccordion>
            </Grid>
            <Grid item xs={12} px={2} mt={3}>
                <Typography
                    sx={styles.fs14}>
                    <b>{dataInfo.length} {object ?? " Objet"}(s)</b> correspondent à votre recherche
                </Typography>
            </Grid>
            <Grid item xs={12} px={2} mt={3}>
                <Link to={'add'}>
                    <Button
                        variant='contained'
                        startIcon={<AddCircle sx={styles.expandDown} />}>
                        Ajouter un {object ?? "Objet"}
                    </Button>
                </Link>
                <DataTable
                    dataInfo={dataInfo}
                    dataField={dataField}
                    object={object} />
                {isLoading &&
                    <Box sx={styles.loaderContainer}>
                        <CircularProgress />
                    </Box>}
            </Grid>
        </UsersLayout>
    )
}

export default GestionLayout;