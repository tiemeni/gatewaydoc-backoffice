import { Box, CircularProgress, Fade, Grid, MenuItem, Paper, Popper, Select, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from './style'
import UsersLayout from '../../layout/usersLayout'
import SearchAccordion from '../../Components/authers/SearchAccordion'
import { Link } from 'react-router-dom'
import { AddCircle, MoreVert, Search, Create, HighlightOff } from '@mui/icons-material'
import { Button, Table } from 'react-bootstrap'

function PageGestionPraticiens() {
    const [isLoading, setIsLoading] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open);
    };

    return (
        <UsersLayout title={"Gestion des praticiens"}>
            <Grid item xs={12} px={2}>
                <SearchAccordion title={"Rechercher un praticien"}>
                    <Box sx={styles.box}>
                        <Typography style={styles.label}>Profession:</Typography>
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
                        <Typography style={styles.label}>Email:</Typography>
                        <TextField
                            sx={styles.input}
                            size="small"
                            id="outlined-basic"
                            variant="outlined"
                            fullWidth
                        />
                    </Box>
                    <Box sx={styles.box}>
                        <Typography style={styles.label}>Le groupe:</Typography>
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
                        <Typography style={styles.label}>Lieu affecté:</Typography>
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
                <Typography sx={styles.fs14}><b>8 praticien(s)</b> correspondent à votre recherche</Typography>
            </Grid>
            <Grid item xs={12} px={2} mt={3}>
                <Link to={'add'}>
                    <Button variant='contained' startIcon={<AddCircle sx={styles.expandDown} />}>Ajouter un remplaçant</Button></Link>
                <TableContainer>
                    <Box style={styles.sectionTitle} mt={2}>
                        <Typography fontSize={14}>Gestion des praticiens</Typography>
                    </Box>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={[styles.fs14, styles.tabHead]}>Disponibilité</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Couleur</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Initiales</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Profession</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Nom</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Prénom</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Actif</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Date de fin d'activité</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Est chirurgien</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Le groupe</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Lieu</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Prix défaut</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow >
                                <TableCell sx={styles.fs14}>
                                    <Link href="#" onClick={handleClick}>
                                        <MoreVert />
                                    </Link>
                                    <Popper open={open} anchorEl={anchorEl} placement='bottom-end' transition>
                                        {({ TransitionProps }) => (
                                            <Fade {...TransitionProps} timeout={350}>
                                                <Paper>
                                                    <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
                                                </Paper>
                                            </Fade>
                                        )}
                                    </Popper>
                                </TableCell>
                                <TableCell sx={styles.fs14} align="right">Lorem</TableCell>
                                <TableCell sx={styles.fs14} align="right">DD</TableCell>
                                <TableCell sx={styles.fs14} align="right">Oncologue</TableCell>
                                <TableCell sx={styles.fs14} align="right">Dongmo</TableCell>
                                <TableCell sx={styles.fs14} align="right">Donald</TableCell>
                                <TableCell sx={styles.fs14} align="right">Non</TableCell>
                                <TableCell sx={styles.fs14} align="right">04/03/2023</TableCell>
                                <TableCell sx={styles.fs14} align="right">Oui</TableCell>
                                <TableCell sx={styles.fs14} align="right">Administrateur</TableCell>
                                <TableCell sx={styles.fs14} align="right">Cabinet 12</TableCell>
                                <TableCell sx={styles.fs14} align="right">2.500</TableCell>
                                <TableCell sx={styles.fs14} align="right">
                                    <Link href="#">
                                        <Create fontSize='large' />
                                    </Link>
                                    <Link href="#" style={{ marginLeft: 10 }}>
                                        <HighlightOff fontSize='large' color='error' />
                                    </Link>
                                </TableCell>
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

export default PageGestionPraticiens;