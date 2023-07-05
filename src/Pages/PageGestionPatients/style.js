import { HEIGHT_OF_HEADER } from "../../Constants/heights";
import { createStyles } from "@mui/material";
import { Colors as colors } from "../../Constants/colors";

const styles = createStyles({
    container: {
        marginTop: HEIGHT_OF_HEADER
    },
    titleBox: {
        height: 60,
        backgroundColor: colors.gainsboro,
        display: 'flex',
        alignItems: 'center',
        padding: '0 2rem'
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
    },
    summary: {
        backgroundColor: colors.black,
        minHeight: 30,
        height: 35,
        maxHeight: 48,
        borderRadius: 5,
        color: colors.white,
        flexDirection: 'row-reverse',
        gap: 5
    },
    details: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        gap: 3,
        width: '50vw',
        margin: 1
    },
    label: {
        fontSize: 14,
        width: 130,
        textAlign: 'end'
    },
    input: {
        fontSize: 16,
        color: 'red'
    },
    btnChild: {
        display: 'flex',
        justifyContent: 'end'
    },
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
    expandDown: {
        color: colors.white,
        fontSize: '2rem'
    },
    tabHead: {
        fontWeight: 'bold'
    },
    fs14: {
        fontSize: 14
    },
    loaderContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%"
    },
})

export default styles