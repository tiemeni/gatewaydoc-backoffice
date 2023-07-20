import { createStyles } from "@mui/material";

const styles = createStyles({
    boxContainer: { textAlign: "center", marginLeft: 'auto', marginRight: 'auto', width: '65vh', height: '100vh', paddingTop: "0px" },
    images: { marginLeft: 'auto', marginRight: 'auto', minWidth: "150px", height: 'auto', width: "10vw", marginTop: "50px" },
    intitule: { fontSize: "14px", textAlign: "center", marginTop: "20px" },
    iconBox: {
        backgroundColor: "gray", width: "100px", height: "100px", borderRadius: "200px",
        marginLeft: 'auto', marginRight: 'auto', marginTop: "20px"
    },
    icon: { fontSize: 100, color: "white" },
    inputBox: { display: "flex", flexDirection: 'column', justifyContent: 'center', marginTop: "20px", gap: "20px" },
    inputField: { width: "80%", marginLeft: 'auto', marginRight: 'auto' }
})

export default styles