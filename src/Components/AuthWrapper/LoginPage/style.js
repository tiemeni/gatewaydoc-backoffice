import { createStyles } from "@mui/material";

const styles = createStyles({
    boxContainer: {
        textAlign: "center",
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '65vh',
        height: '100vh',
        paddingTop: "0px"
    },
    img: {
        marginLeft: 'auto',
        marginRight: 'auto',
        minWidth: "150px",
        height: 'auto',
        width: "10vw",
        marginTop: "50px"
    },
    intitule: {
        fontSize: "14px",
        textAlign: "center",
        marginTop: "20px"
    },
    iconBox: {
        backgroundColor: "gray",
        width: "100px",
        height: "100px",
        borderRadius: "200px",
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: "20px"
    },
    flexBox: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: "20px",
        gap: "20px"
    },
    inputField: {
        width: "80%",
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: "12px"
    },
    btn: {
        width: "80%",
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '10px',
        paddingBottom: "10px",
        background: '#66CDAA',
        color: "white",
        fontSize: '12px',
        fontWeight: 'bold'
    }

})

export default styles