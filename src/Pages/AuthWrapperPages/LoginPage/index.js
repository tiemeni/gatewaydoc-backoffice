import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import gatewayDocLogo from '../../../gatewaydoc.png'
import { Colors } from '../../../Constants/colors';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../REDUX/users/actions';
import { saveIdc } from '../../../REDUX/commons/actions';
import { signUserIn } from '../../../services/users';
import styles from './style'


const LoginPage = ({ idc }) => {
    const dispatch = useDispatch()
    const [login, setLogin] = useState("");
    const [mdp, setMdp] = useState("");
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleLogin = (e) => {
        setLogin(e.target.value)
    }

    const handleMdp = (e) => {
        setMdp(e.target.value)
    }

    const handleSubmit = async () => {
        setError('')
        setLoading(true)
        const result = await signUserIn({ email: login, password: mdp }, idc)
        if (result?.success) {
            setLoading(false)
            dispatch(setUser({ ...result.data.user }))
            // dispatch(saveIdc(idc))

            localStorage.setItem("acces_bo_token", result.data.access_token)
            localStorage.setItem("idc", idc)
            window.location = "/content"
        } else {
            setLoading(false)
            setError(result?.message || "une erreur s'est produite, veillez verifier votre connexion")
        }
    }

    return (
        <div style={{ position: "relative" }}>
            <Box style={styles.boxContainer}>
                <img src={gatewayDocLogo} style={styles.images} alt='' />

                <p style={styles.intitule}>CONNECTEZ-VOUS A VOTRE COMPTE</p>
                <div style={styles.iconBox}>
                    <PersonIcon sx={styles.icon} />
                </div>
                <Box style={styles.inputBox}>
                    <p style={{ color: 'red' }}>{error}</p>
                    <TextField
                        required
                        id="outlined-required"
                        label="Login"
                        value={login}
                        onChange={handleLogin}
                        defaultValue=""
                        style={styles.inputField}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Mot de passe"
                        value={mdp}
                        onChange={handleMdp}
                        defaultValue=""
                        style={styles.inputField}
                    />
                    <Button
                        onClick={handleSubmit}
                        style={{
                            width: "80%", marginLeft: 'auto', marginRight: 'auto', paddingTop: '10px',
                            paddingBottom: "10px", background: Colors.primary, color: "white", fontSize: '12px', fontWeight: 'bold'
                        }} >{loading ? 'Chargement...' : 'Se connecter'}</Button>

                </Box>

            </Box>
        </div>
    )
}



export default LoginPage;