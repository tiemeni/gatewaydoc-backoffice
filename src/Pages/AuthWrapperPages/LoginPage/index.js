import React, {useState} from 'react'
import {Box, TextField, Button} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/system';
import gatewayDocLogo from '../../../gatewaydoc.png'
import { Colors } from '../../../Constants/colors';


const LoginPage = () => {

    const [login, setLogin] = useState("");
    const [mdp, setMdp] = useState("");


  return (
    <div style={{ position: "relative" }}>
        <Box style={{ textAlign:"center", marginLeft:'auto', marginRight:'auto', width:'65vh', height: '100vh', paddingTop: "0px" }}>
            <img src={gatewayDocLogo} style={{marginLeft:'auto', marginRight:'auto', minWidth:"150px", height:'auto', width:"10vw", marginTop:"50px" }} /> 

            <p style={{ fontSize: "14px", textAlign: "center", marginTop:"20px" }}>CONNECTEZ-VOUS A VOTRE COMPTE</p>
            <div style={{ backgroundColor: "gray", width: "100px", height:"100px", borderRadius: "200px",
                marginLeft:'auto', marginRight:'auto', marginTop:"20px" }}>
                    <PersonIcon  sx={{ fontSize: 100, color:"white" }}/>
            </div>
            <Box style={{ display:"flex", flexDirection: 'column', justifyContent:'center', marginTop:"20px", gap:"20px" }}>
            <TextField
                    required
                    id="outlined-required"
                    label="Login"
                    defaultValue=""
                    style={{ width: "80%", marginLeft:'auto', marginRight:'auto'}}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Mot de passe"
                    defaultValue=""
                    style={{ width: "80%", marginLeft:'auto', marginRight:'auto' }}
                />
                <Button style={{ width: "80%", marginLeft:'auto', marginRight:'auto', paddingTop: '10px',
                 paddingBottom: "10px", background: Colors.primary, color: "white", fontSize: '12px', fontWeight:'bold' }} >Se connecter</Button>

            </Box> 

        </Box>
    </div>
  )
}



export default LoginPage;