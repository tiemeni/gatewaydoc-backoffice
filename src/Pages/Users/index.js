import React, { useState } from 'react'
import styles from './style.js'
import { Button, Accordion, AccordionDetails, AccordionSummary, Box, Grid, MenuItem, Select, TextField, Typography, TableContainer, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material'
import { Search, AddCircle, ExpandCircleDown } from '@mui/icons-material'
import { Table } from 'react-bootstrap'
import { users } from '../../helpers/defautData.js'

export default function Users() {
  return (
    <Grid style={styles.container}>
      <Grid item xs={12} style={styles.titleBox}>
        <Typography sx={styles.title}>Gestion des utilisateurs</Typography>
      </Grid>
      <Grid item xs={12} px={2}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandCircleDown sx={styles.expandDown} />} style={styles.summary}>
            <Typography fontSize={14}>Rechercher un utilisateur</Typography>
          </AccordionSummary>
          <AccordionDetails style={styles.details}>
            <Box sx={styles.box}>
              <Typography style={styles.label}>Profession:</Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size='small'
                fullWidth
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Box>
            <Box sx={styles.box}>
              <Typography style={styles.label}>Nom:</Typography>
              <TextField sx={styles.input} size='small' id="outlined-basic" variant="outlined" fullWidth />
            </Box>
            <Box sx={styles.box}>
              <Typography style={styles.label}>Prénom:</Typography>
              <TextField sx={styles.input} size='small' id="outlined-basic" variant="outlined" fullWidth />
            </Box>
            <Box sx={styles.box}>
              <Typography style={styles.label}>Email:</Typography>
              <TextField sx={styles.input} size='small' id="outlined-basic" variant="outlined" fullWidth />
            </Box>
            <Box sx={styles.box}>
              <Typography style={styles.label}>Type interpro:</Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size='small'
                fullWidth
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Box>

            <Grid container spacing={1} mt={2}>
              <Grid item xs={6} style={styles.btnChild}>
                <Button variant='contained'>Annuler</Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant='contained' startIcon={<Search />}>Rechercher</Button>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={12} px={2} mt={3}>
        <Typography sx={styles.fs14}><b>8 utilisateurs</b> correspondent à votre recherche</Typography>
      </Grid>
      <Grid item xs={12} px={2} mt={3}>
        <TableContainer>
          <Button variant='contained' startIcon={ <AddCircle sx={styles.expandDown} />}>Créer un utilisateur</Button>
          <Box style={styles.sectionTitle} mt={2}>
            <Typography fontSize={14}>Gestion des utilisateurs</Typography>
          </Box>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={styles.fs14} >Profession</TableCell>
                <TableCell sx={styles.fs14} >Fonction</TableCell>
                <TableCell sx={styles.fs14} >Initial</TableCell>
                <TableCell sx={styles.fs14} >Nom</TableCell>
                <TableCell sx={styles.fs14} >Prénom</TableCell>
                <TableCell sx={styles.fs14} >Email</TableCell>
                <TableCell sx={styles.fs14} >Groupe</TableCell>
                <TableCell sx={styles.fs14} >Lieu affecté</TableCell>
                <TableCell sx={styles.fs14} >Activités</TableCell>
                <TableCell sx={styles.fs14} >Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell sx={styles.fs14}>{user.profession}</TableCell>
                  <TableCell sx={styles.fs14}>{user.fonction}</TableCell>
                  <TableCell sx={styles.fs14}>{user.initial}</TableCell>
                  <TableCell sx={styles.fs14}>{user.nom}</TableCell>
                  <TableCell sx={styles.fs14}>{user.prenom}</TableCell>
                  <TableCell sx={styles.fs14}>{user.email}</TableCell>
                  <TableCell sx={styles.fs14}>{user.groupe}</TableCell>
                  <TableCell sx={styles.fs14}>{user.lieu}</TableCell>
                  <TableCell sx={styles.fs14}>{user.activite}</TableCell>
                  <TableCell sx={styles.fs14}>some actions</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid >
  )
}