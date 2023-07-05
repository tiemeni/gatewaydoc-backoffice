import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/system';
import gatewayDocLogo from '../../../gatewaydoc.png'
import { Colors } from '../../../Constants/colors';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../REDUX/users/actions';
import { signUserIn } from '../../../services/users';


const LoginPage = () => {
    const dispatch = useDispatch()
    const [login, setLogin] = useState("");
    const [mdp, setMdp] = useState("");
    const [error, setError] = useState("")

    const handleLogin = (e) => {
        setLogin(e.target.value)
    }

    const handleMdp = (e) => {
        setMdp(e.target.value)
    }

    const handleSubmit = async () => {
        setError('')
        const result = await signUserIn({ email: login, password: mdp })
        if (result.data.success) {
            dispatch(setUser({ ...result.data.data.user }))
            localStorage.setItem("acces_bo_token", result.data.data.access_token)
            window.location = "/content"
        } else {
            console.log('not here')
            setError(result.data.message)
        }
    }

    return (
        <div style={{ position: "relative" }}>
            <Box style={{ textAlign: "center", marginLeft: 'auto', marginRight: 'auto', width: '65vh', height: '100vh', paddingTop: "0px" }}>
                <img src={gatewayDocLogo} style={{ marginLeft: 'auto', marginRight: 'auto', minWidth: "150px", height: 'auto', width: "10vw", marginTop: "50px" }} />

                <p style={{ fontSize: "14px", textAlign: "center", marginTop: "20px" }}>CONNECTEZ-VOUS A VOTRE COMPTE</p>
                <div style={{
                    backgroundColor: "gray", width: "100px", height: "100px", borderRadius: "200px",
                    marginLeft: 'auto', marginRight: 'auto', marginTop: "20px"
                }}>
                    <PersonIcon sx={{ fontSize: 100, color: "white" }} />
                </div>
                <Box style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', marginTop: "20px", gap: "20px" }}>
                    <p style={{ color: 'red' }}>{error}</p>
                    <TextField
                        required
                        id="outlined-required"
                        label="Login"
                        value={login}
                        onChange={handleLogin}
                        defaultValue=""
                        style={{ width: "80%", marginLeft: 'auto', marginRight: 'auto' }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Mot de passe"
                        value={mdp}
                        onChange={handleMdp}
                        defaultValue=""
                        style={{ width: "80%", marginLeft: 'auto', marginRight: 'auto' }}
                    />
                    <Button
                        onClick={handleSubmit}
                        style={{
                            width: "80%", marginLeft: 'auto', marginRight: 'auto', paddingTop: '10px',
                            paddingBottom: "10px", background: Colors.primary, color: "white", fontSize: '12px', fontWeight: 'bold'
                        }} >Se connecter</Button>

                </Box>

            </Box>
        </div>
    )
}



export default LoginPage;