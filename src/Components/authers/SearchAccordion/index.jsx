import React from 'react'
import styles from './style'
import { Button, Accordion, AccordionDetails, AccordionSummary, Box, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Search, ExpandCircleDown } from '@mui/icons-material';
import { Colors } from '../../../Constants/colors';

const SearchAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandCircleDown sx={styles.expandDown} />}
        style={styles.summary}
      >
        <Typography fontSize={14}>Rechercher un utilisateur</Typography>
      </AccordionSummary>
      <AccordionDetails style={styles.details}>
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
            <Button variant="contained" style={styles.btn}>Annuler</Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" style={styles.btn} startIcon={<Search />}>
              Rechercher
            </Button>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default SearchAccordion;
