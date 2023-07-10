import { Box, TextField } from '@mui/material'
import React from 'react'
import { styles } from './style'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import DateComponent from '../dateComponent';
import { Colors } from '../../../Constants/colors.js';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuListComposition from '../Menue';
import { Link } from 'react-router-dom';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useDispatch } from 'react-redux';
import { showPRDV } from '../../../REDUX/commons/actions';

function Header() {
    const dispatch = useDispatch()

    return (
        <Box
            style={{
                ...styles.container,
                backgroundColor: Colors.black
            }}>
            <Box style={{ ...styles.menu1, alignItems: "center" }}>
                <Box style={{ width: "30%", display: "flex", justifyContent: "center", fontWeight: 'bold' }}>
                    <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <Link to={{ pathname: "/content/" }} >
                            <h4 style={{ padding: 0, margin: 0, fontWeight: "bold", color: Colors.primary, cursor: 'pointer' }}>GATEWAY DOC </h4>
                        </Link>
                        <DateComponent />
                    </Box>
                </Box>
                <Box style={{ width: "30%", display: "flex", justifyContent: "center", position: "relative" }}>
                    <input
                        type={"text"}
                        style={{ borderRadius: 7, height: 35, width: 200, paddingLeft: 10 }}
                        placeholder="RECHERCHER" />
                    {/* <SearchOutlinedIcon
                        titleAccess='rechercher'
                        style={{ ...styles.icon, border: "", position: "absolute", backgroundColor: Colors.primary, right: 12, width: 32, height: 32, marginTop: 2 }} /> */}
                </Box>
                <Box style={{ width: "40%", display: "flex", justifyContent: "space-around" }}>
                    <PersonOutlinedIcon titleAccess='comptes patients' style={styles.icon} />
                    <MailOutlinedIcon titleAccess='Messagerie' style={styles.icon} />
                    <MenuListComposition IconName={"mail"} styles={styles.icon} />
                    <FlashOnOutlinedIcon titleAccess='Raccourcis' style={styles.icon} />
                    <AddOutlinedIcon onClick={() => dispatch(showPRDV(true))} titleAccess='Prendre un rdv' style={styles.icon} />
                </Box>
            </Box>
            <Box style={{ ...styles.menu1, float: "right" }}>
                <Box></Box>
                <Box></Box>
                <Box style={{ display: "flex", flexDirection: 'row' }}>
                    <PersonOutlinedIcon titleAccess='comptes patients' style={styles.icon} />
                    <p style={{ color: Colors.white, fontSize: 17, marginLeft: 10, marginRight: 10, marginTop: 5 }}>Tiemeni hapi</p>
                    <ArrowDropDownOutlinedIcon titleAccess='' style={styles.icon} />
                </Box>
            </Box>
        </Box>
    )
}

export default Header