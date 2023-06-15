import { Box, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import styles from './style'
import { users } from "../../helpers/defautData.js"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

function PageGestionSpecialites() {
    return (
        <Box style={styles.container}>
            <Grid item xs={12} style={styles.titleBox}>
                <Typography sx={styles.title}>Gestion des Comptes Patient</Typography>
            </Grid>
            <Box style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "100%" }}>
                <Box style={{ paddingLeft: 15, paddingRight: 15, width: "95%" }}>
                    <Box style={styles.sectionTitle} mt={2}>
                        <Typography fontSize={14}>Gestion des Comptes patient</Typography>
                    </Box>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={styles.fs14} >Actions</TableCell>
                                <TableCell sx={styles.fs14} >civilité</TableCell>
                                <TableCell sx={styles.fs14} >Nom du patient</TableCell>
                                <TableCell sx={styles.fs14} >e-mail</TableCell>
                                <TableCell sx={styles.fs14} >Telephone</TableCell>
                                <TableCell sx={styles.fs14} >Id fiche patient</TableCell>
                                <TableCell sx={styles.fs14} >Statut du compte</TableCell>
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