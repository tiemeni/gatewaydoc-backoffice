import { createStyles } from "@mui/material";
import { Colors as colors } from "../../../Constants/colors";

const styles = createStyles({
    sectionTitle: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 1.5rem',
        gap: 5,
        height: 35,
        backgroundColor: colors.black,
        borderRadius: 5,
        color: colors.white
    },
    add: {
        backgroundColor: colors.white,
        height: 15,
        width: 15
    },
    fs14: {
        fontSize: 14
    },
    tabHead: {
        fontWeight: 'bold'
    },
    loaderContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%"
    },
    expandDown: {
        color: colors.white,
        fontSize: "2rem",
    },
    box: {
        display: "flex",
        alignItems: "center",
        gap: 3,
        width: "50vw",
        margin: 1,
    },
    label: {
        fontSize: 14,
        width: 130,
        textAlign: "end",
    },
    input: {
        fontSize: 16,
        color: "red",
    },
    btnChild: {
        display: "flex",
        justifyContent: "end",
    },
})

export default styles