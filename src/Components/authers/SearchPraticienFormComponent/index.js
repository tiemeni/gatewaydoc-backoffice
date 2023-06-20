import { styles } from "./style"
import { Search } from '@mui/icons-material';
import { Box, Button, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';

export const SearchPraticienFormComponent = () => {
    return (
        <Box>
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
        </Box>
    )
}