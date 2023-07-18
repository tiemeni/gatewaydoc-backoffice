import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import styles from './style'
import gatewayDocLogo from '../../../gatewaydoc.png'


const LoginPage = () => {

    const [login, setLogin] = useState("");
    const [mdp, setMdp] = useState("");


    return (
        <div style={{ position: "relative" }}>
            <Box style={styles.boxContainer}>
                <img src={gatewayDocLogo} style={styles.img} alt='' />

                <p style={styles.intitule}>CONNECTEZ-VOUS A VOTRE COMPTE</p>
                <div style={styles.iconBox}>
                    <PersonIcon sx={{ fontSize: 100, color: "white" }} />
                </div>
                <Box style={styles.flexBox}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Login"
                        defaultValue=""
                        style={styles.inputField}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Mot de passe"
                        defaultValue=""
                        style={styles.inputField}
                    />
                    <Button style={styles.btn} >Se connecter</Button>

                </Box>

            </Box>
        </div>
    )
}



export default LoginPage;