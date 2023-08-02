import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';
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
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState (false)



    /**
     * Valider le login
     * 
     * Si le mot login est incorrect alors on retourne false
     * 
     * @param login
     * @return Boolean
     */
    const validate_login = (login) => {
        var Reg = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
        return Reg.test(login);
    }

     /**
     * Valider un mot de passe
     * 
     * Si le mot de passe n'est pas assez sécurisé, retournez false
     * 
     * @param mdp
     * @return Boolean
     */
     const validate_MDP = (mdp) => {
        var Reg = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
        return Reg.test(mdp);
    }
    

    

    const handleLogin = (e) => {
        setLogin(e.target.value)
    }
    

    const handleMdp = (e) => {
        setMdp(e.target.value)
    }

    const handleSubmit = async () => {
        //setError('')
        setLoading(true)
        const result = await signUserIn({ email: login, password: mdp })
        if (validate_login(login)){
            if (validate_MDP(mdp)) {
                if (result.data?.success) {
                    setLoading(false)
                    dispatch(setUser({ ...result.data.data.user }))
                    localStorage.setItem("acces_bo_token", result.data.data.access_token)
                    window.location = "/content"
                } else {
                    setLoading(false)
                    console.log(result?.error)
                    setError(result.data?.message || "une erreur s'est produite, veillez verifier votre connexion")
                }
                
            }else{
                setError("Merci de renseigner un mot de passe valide")
            }
        }else{
            setError("Merci de renseigner un login valide")
        }
        
    }

    return (
        <div style={{ position: "relative" }}>
            <Box style={{ textAlign: "center", marginLeft: 'auto', marginRight: 'auto', width: '65vh', height: '100vh', paddingTop: "0px" }}>
                <img alt="" src={gatewayDocLogo} style={{ marginLeft: 'auto', marginRight: 'auto', minWidth: "150px", height: 'auto', width: "10vw", marginTop: "50px" }} />

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
                        id="login"
                        label="Login"
                        value={login}
                        onChange={handleLogin}
                        defaultValue=""
                        style={{ width: "80%", marginLeft: 'auto', marginRight: 'auto' }}
                    />
                    <TextField
                        required
                        id="password"
                        label="Mot de passe"
                        value={mdp}
                        onChange={handleMdp}
                        type = {visible ? "text" : "password" }
                        defaultValue = ""
                        style={{ width: "80%", marginLeft: 'auto', marginRight: 'auto',  position: "relative" }}
                    />
                    <Button 
                        style={{
                            position:"absolute",
                            color: Colors.primary,
                            marginLeft: "315px",
                            marginTop: "35px",
                            cursor: "pointer"
                        }}
                        onClick={ () => setVisible(!visible) }>
                        { visible ? <Visibility/> : <VisibilityOff/> }
                    </Button>
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
