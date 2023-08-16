import { styles } from "./styles"
import { Search } from '@mui/icons-material';
import { Box, Button, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';

export const SearchRecapPaiement = () => {
    return (
        <Box>
            <Box sx={styles.box}>
                <Typography style={styles.label}>Intervale date du RDV : Date de début</Typography>
                <input style={{ width: '100%', padding: '3px', border:'none', border:'solid', borderRadius: '4px', borderColor:'#d1cdcd', borderWidth: '1px' }} type="date" />
            </Box>
            <Box sx={styles.box}>
                <Typography style={styles.label}>Date de début:</Typography>
                <input style={{ width: '100%', padding: '3px', border:'none', border:'solid', borderRadius: '4px', borderColor:'#d1cdcd', borderWidth: '1px' }} type="date" />

            </Box>
            <Box sx={styles.box}>
                <Typography style={styles.label}>Praticien:</Typography>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    size="small"
                    fullWidth
                >
                    <MenuItem value={10}>Praticien 1</MenuItem>
                    <MenuItem value={20}>Praticien 2</MenuItem>
                    <MenuItem value={30}>Praticien 3</MenuItem>
                </Select>
            </Box>
            <Box sx={styles.box}>
                <Typography style={styles.label}>Lieu:</Typography>
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
                <Typography style={styles.label}>Mode de règlement :</Typography>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    size="small"
                    fullWidth
                >
                    <MenuItem value={10}>Orange Money</MenuItem>
                    <MenuItem value={20}>MTN Mobile Money</MenuItem>
                    <MenuItem value={30}>Visa</MenuItem>
                </Select>
            </Box>

            <Grid container spacing={1} mt={2}>
                <Grid item xs={4} style={styles.btnChild}>
                    <Button variant="contained">Annuler</Button>
                </Grid>
                <Grid item xs={4} style={styles.btnChild}>
                    <Button variant="contained" startIcon={<Search />}>
                        Rechercher
                    </Button>
                </Grid>
                <Grid item xs={3} style={styles.btnChild}>
                    <Button variant="contained" >
                        Imprimer
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}