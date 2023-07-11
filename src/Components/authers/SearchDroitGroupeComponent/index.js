import { styles } from "./style"
import { Search } from '@mui/icons-material';
import { Box, Button, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';

export const SearchDroitGroupeComponent = () => {
    return (
        <Box>

            <Box sx={styles.box}>
                <Typography style={styles.label}>Action</Typography>
                <TextField
                    sx={styles.input}
                    size="small"
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                />
            </Box>
            <Box sx={styles.box}>
                <Typography style={styles.label}>Nom Groupe</Typography>
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
                    <Button variant="contained" style={{ backgroundColor:"#777777", fontSize:"12px" }}>Annuler</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" style={{ fontSize:"12px" }} startIcon={<Search />}>
                        Rechercher
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}