import { Box, CircularProgress, Grid, MenuItem, Select, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from './style'
import UsersLayout from '../../layout/usersLayout'
import SearchAccordion from '../../Components/authers/SearchAccordion'
import { Link } from 'react-router-dom'
import { AddCircle, MoreVert, Search } from '@mui/icons-material'
import { Button, Table } from 'react-bootstrap'

function PageGestionPatients() {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <UsersLayout title={"Gestion des Comptes Web"}>
            <Grid item xs={12} px={2}>
                <SearchAccordion title={"Rechercher un compte"}>
                    <Box sx={styles.box}>
                        <Typography style={styles.label}>Civilité:</Typography>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            size="small"
                            fullWidth
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </Box>
                    <Box sx={styles.box}>
                        <Typography style={styles.label}>Nom:</Typography>
                        <TextField
                            sx={styles.input}
                            size="small"
                            id="outlined-basic"
                            variant="outlined"
                            fullWidth
                        />
                    </Box>
                    <Box sx={styles.box}>
                        <Typography style={styles.label}>Prénom:</Typography>
                        <TextField
                            sx={styles.input}
                            size="small"
                            id="outlined-basic"
                            variant="outlined"
                            fullWidth
                        />
                    </Box>
                    <Box sx={styles.box}>
                        <Typography style={styles.label}>Email:</Typography>
                        <TextField
                            sx={styles.input}
                            size="small"
                            id="outlined-basic"
                            variant="outlined"
                            fullWidth
                        />
                    </Box>

                    <Grid container spacing={1} mt={2}>
                        <Grid item xs={6} style={styles.btnChild}>
                            <Button variant="contained">Annuler</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" startIcon={<Search />}>
                                Rechercher
                            </Button>
                        </Grid>
                    </Grid>
                </SearchAccordion>
            </Grid>
            <Grid item xs={12} px={2} mt={3}>
                <Typography sx={styles.fs14}><b>8 comptes</b> correspondent à votre recherche</Typography>
            </Grid>
            <Grid item xs={12} px={2} mt={3}>
                <Link to={'add'}>
                    <Button variant='contained' startIcon={<AddCircle sx={styles.expandDown} />}>Retour</Button></Link>
                <TableContainer>
                    <Box style={styles.sectionTitle} mt={2}>
                        <Typography fontSize={14}>Gestion des Comptes Web</Typography>
                    </Box>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={[styles.fs14, styles.tabHead]}>Civilité</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Nom</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Prénom</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Email</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Tel</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Fiche patient</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Statut compte</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow >
                                <TableCell sx={styles.fs14}>Lorem ipsum</TableCell>
                                <TableCell sx={styles.fs14} align="right">Lorem ipsum</TableCell>
                                <TableCell sx={styles.fs14} align="right">Lorem ipsum</TableCell>
                                <TableCell sx={styles.fs14} align="right">Lorem ipsum</TableCell>
                                <TableCell sx={styles.fs14} align="right">Lorem ipsum</TableCell>
                                <TableCell sx={styles.fs14} align="right">Lorem ipsum</TableCell>
                                <TableCell sx={styles.fs14} align="right">Lorem ipsum</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                {isLoading && <Box sx={styles.loaderContainer}>
                    <CircularProgress />
                </Box>}
            </Grid>
        </UsersLayout >
    )
}

export default PageGestionPatients