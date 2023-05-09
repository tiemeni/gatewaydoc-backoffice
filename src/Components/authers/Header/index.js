import { Box, Grid, IconButton, InputAdornment, ListItemIcon, Menu, MenuItem, TextField } from '@mui/material'
import React from 'react'
import { styles } from './style'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import DateComponent from '../dateComponent';
import { Colors } from '../../../Constants/colors.js';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = true;
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box
            style={{
                ...styles.container,
                backgroundColor: Colors.black
            }}>
            <Box style={{ ...styles.menu1, alignItems: "center" }}>
                <Box style={{ width: "30%", display: "flex", justifyContent: "center", fontWeight: 'bold' }}>
                    <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <h4 style={{ padding: 0, margin: 0, fontWeight: "bold", color: Colors.primary }}>GATEWAY DOC </h4>
                        <DateComponent />
                    </Box>
                </Box>
                <Box style={{ width: "30%", display: "flex", justifyContent: "center", }}>
                    <TextField
                        className='text-field-input'
                        InputProps={{
                            sx: {
                                borderRadius: 20,
                                fontSize: 15,
                                height: 25,
                                backgroundColor: "white"
                            }
                        }}
                        name='name'
                        type='text'
                        variant='outlined'
                        placeholder='Rechercher un patient'
                        fullWidth
                    // helperText={errors.nameError}
                    />
                </Box>
                <Box style={{ width: "40%", display: "flex", justifyContent: "space-around" }}>
                    <Box disp>
                        <PersonOutlinedIcon titleAccess='comptes patients' style={styles.icon} />
                        {/* <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={"Fade"}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu> */}
                    </Box>
                    <MailOutlinedIcon titleAccess='Messagerie' style={styles.icon} />
                    <SettingsOutlinedIcon titleAccess='Parametres' style={styles.icon} />
                    <FlashOnOutlinedIcon titleAccess='Raccourcis' style={styles.icon} />
                </Box>
            </Box>
            <Box style={{ ...styles.menu1, float: "right" }}>
                <Box></Box>
                <Box></Box>
                <Box style={{ display: "flex", flexDirection: 'row' }}>
                    <PersonOutlinedIcon titleAccess='comptes patients' style={styles.icon} />
                    <p style={{ color: Colors.white, fontSize: 17 }}>Tiemeni hapi</p>
                    <ArrowDropDownOutlinedIcon titleAccess='' style={styles.icon} />
                </Box>
            </Box>
        </Box>
    )
}

export default Header