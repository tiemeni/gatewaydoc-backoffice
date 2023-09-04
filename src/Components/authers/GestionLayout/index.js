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
    searchFonction,
    loading,
    rowsPerPage= 5, 
    page= 0, 
    rowsPerPageOptions=[5, 10, 25, { label: 'Tous', value: -1 }],
    onPageChange=()=>{}, 
    onRowsPerChange=()=>{},
    allowSearch = true
}) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <UsersLayout
            title={title ?? "Gestion des Objects"}>
            {allowSearch && <Grid item xs={12} px={2}>
                <SearchAccordion
                    title={object ? "Rechercher un " + object : "Rechercher un Object"}>
                    {searchForm}
                </SearchAccordion>
            </Grid>}
            <Grid item xs={12} px={2} mt={3}>
                <Typography
                    sx={styles.fs14}>
                    <b>{dataInfo.length} {object ?? " Objet"}(s) </b> 
                    {loading? "en cour de chargement..." : "correspondent à votre recherche"}
                </Typography>
            </Grid>
            <Grid item xs={12} px={2} mt={3}>
                <Link to={'creation'}>
                    <Button
                        variant='contained'
                        starticon={<AddCircle sx={styles.expandDown} />}>
                        Ajouter un {object ?? "Objet"}
                    </Button>
                </Link>
                <DataTable
                    page={page}
                    rowsPerPageOptions={rowsPerPageOptions}
                    rowsPerPage={rowsPerPage}
                    onPageChange={onPageChange}
                    onRowsPerChange={onRowsPerChange}
                    loading={loading}
                    dataInfo={dataInfo}
                    dataField={dataField}
                    object={object} />
               
            </Grid>
        </UsersLayout>
    )
}
/** {isLoading &&
                    <Box sx={styles.loaderContainer}>
                        <CircularProgress />
                    </Box>} */
export default GestionLayout;