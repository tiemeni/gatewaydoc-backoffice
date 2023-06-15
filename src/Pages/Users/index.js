import React from 'react'
import styles from './style.js'
import { Button, Box, Grid, Typography, TableContainer, TableHead, TableRow, TableCell, TableBody, Popper, CircularProgress, MenuItem, Select, TextField, Fade, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import { AddCircle, MoreVert, Search } from '@mui/icons-material'
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getUsers();

      if (response.status !== true) {
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      dispatch(saveUsers(response.data))
    }
    fetchData()
  }, [])

  return (
    <UsersLayout title={"Gestion des utilisateurs"}>
      <Grid item xs={12} px={2}>
        <SearchAccordion title={"Rechercher un utilisateur"}>
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
          <Box sx={styles.box}>
            <Typography style={styles.label}>Type interpro:</Typography>
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
                  <TableCell sx={styles.fs14} align='right'>
                    <Link href="#" onClick={handleClick}>
                      <MoreVert />
                    </Link>
                    <Popper open={open} anchorEl={anchorEl} placement='bottom-end' transition>
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                          <Paper key={1}>
                            <Typography sx={{ p: 2 }}>Modifier</Typography>
                          </Paper>
                        </Fade>
                      )}
                    </Popper>
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