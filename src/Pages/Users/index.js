import React from 'react'
import styles from './style.js'
import { Button, Box, Grid, Typography, TableContainer, TableHead, TableRow, TableCell, TableBody, Popper, CircularProgress } from '@mui/material'
import { Link } from 'react-router-dom'
import { AddCircle, MoreVert } from '@mui/icons-material'
import { Table } from 'react-bootstrap'
import SearchAccordion from '../../Components/authers/SearchAccordion'
import { getUsers } from '../../services/users/index'
import { useDispatch, useSelector } from 'react-redux'
import { saveUsers } from '../../REDUX/users/actions'
import UsersLayout from '../../layout/usersLayout'

export default function Users() {
  const [isLoading, setIsLoading] = React.useState(true);
  const usersList = useSelector((state) => state.Users.users)
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getUsers();

      if (response.status !== true) {
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      console.log(response)
      dispatch(saveUsers(response.data))
    }
    fetchData()
  }, [])

  return (
    <UsersLayout>
      <Grid item xs={12} px={2}>
        <SearchAccordion />
      </Grid>
      <Grid item xs={12} px={2} mt={3}>
        <Typography sx={styles.fs14}><b>8 utilisateurs</b> correspondent à votre recherche</Typography>
      </Grid>
      <Grid item xs={12} px={2} mt={3}>
        <Link to={'add'}>
          <Button variant='contained' startIcon={<AddCircle sx={styles.expandDown} />}>Créer un utilisateur</Button></Link>
        <TableContainer>
          <Box style={styles.sectionTitle} mt={2}>
            <Typography fontSize={14}>Gestion des utilisateurs</Typography>
          </Box>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={[styles.fs14, styles.tabHead]} >Profession</TableCell>
                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Fonction</TableCell>
                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Initial</TableCell>
                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Nom</TableCell>
                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Prénom</TableCell>
                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Email</TableCell>
                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Groupe</TableCell>
                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Lieu affecté</TableCell>
                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Activités</TableCell>
                <TableCell sx={[styles.fs14, styles.tabHead]} align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersList.map((user) => (
                <TableRow key={user.id}>
                  <TableCell sx={styles.fs14}>{user.profession}</TableCell>
                  <TableCell sx={styles.fs14} align="right">{user.fonction}</TableCell>
                  <TableCell sx={styles.fs14} align="right">{user.initial}</TableCell>
                  <TableCell sx={styles.fs14} align="right">{user.nom}</TableCell>
                  <TableCell sx={styles.fs14} align="right">{user.prenom}</TableCell>
                  <TableCell sx={styles.fs14} align="right">{user.email}</TableCell>
                  <TableCell sx={styles.fs14} align="right">{user.groupe}</TableCell>
                  <TableCell sx={styles.fs14} align="right">{user.lieu}</TableCell>
                  <TableCell sx={styles.fs14} align="right">{user.activite}</TableCell>
                  <TableCell sx={styles.fs14} align="right">
                    <Link href="#">
                      <MoreVert />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
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