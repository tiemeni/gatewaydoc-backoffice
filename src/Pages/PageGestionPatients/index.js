import { Box, Button, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import styles from './style'
import { users } from "../../helpers/defautData.js"
import { AddCircle, MoreVert } from '@mui/icons-material'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { Colors } from '../../Constants/colors'
import SearchAccordion from '../../Components/authers/SearchAccordion'

function PageGestionSpecialites() {
    return (
        <Box style={styles.container}>
            <Grid item xs={12} style={styles.titleBox}>
                <Typography sx={styles.title}>Gestion des Comptes Patient</Typography>
            </Grid>
            <Grid item xs={12} mt={5} px={2} display={'flex'} flexDirection={'row'} justifyContent={'center'} >
                <Grid width={"98%"}>
                    <SearchAccordion />
                </Grid>
            </Grid>
            <Box style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "100%" }}>
                <Box style={{ paddingLeft: 15, paddingRight: 15, width: "98%", marginTop: 30 }}>
                    <Button
                        variant='contained'
                        style={{ backgroundColor: Colors.primary, fontSize: 13 }}
                        startIcon={<AddCircle sx={{}} />}>
                        Créer un patient
                    </Button>
                    <Box style={styles.sectionTitle} mt={2}>
                        <Typography fontSize={14}>Gestion des Comptes patient</Typography>
                    </Box>
                    <Table sx={{
                        minWidth: 650, boxShadow: '1px 5px 5px gray'
                    }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={[styles.fs14, styles.tabHead]} >Actions</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} >civilité</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} >Nom du patient</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} >e-mail</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} >Telephone</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} >Id fiche patient</TableCell>
                                <TableCell sx={[styles.fs14, styles.tabHead]} >Statut du compte</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell sx={styles.fs14}>
                                        {/* <input type={'button'} >profession</input> */}
                                        <div style={{}}>
                                            <EditOutlinedIcon style={{ height: 22, width: 22, cursor: "pointer", color: "orange" }} />
                                            <HighlightOffOutlinedIcon style={{ height: 22, width: 22, cursor: "pointer", color: "red", marginLeft: 15 }} />
                                        </div>
                                    </TableCell>
                                    <TableCell sx={styles.fs14}>{user.fonction}</TableCell>
                                    <TableCell sx={styles.fs14}>{user.initial}</TableCell>
                                    <TableCell sx={styles.fs14}>{user.nom}</TableCell>
                                    <TableCell sx={styles.fs14}>{user.telephone ?? "658686162"}</TableCell>
                                    <TableCell sx={styles.fs14}>{user.idFpatient ?? "5q4s54qs5d4qs4q54s5q4s54"}</TableCell>
                                    <TableCell sx={styles.fs14}>{user.status ?? "confirmé"}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Box>
        </Box>
    )
}

export default PageGestionSpecialites