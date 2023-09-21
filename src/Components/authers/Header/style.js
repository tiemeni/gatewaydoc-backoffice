import { Colors } from "../../../Constants/colors";
import { HEADER_SIZE } from "../../../Constants/sizes";


export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItem: "center",
        width: "100%",
        position: "fixed",
        zIndex: 1000,
        height: HEADER_SIZE,
    },
    menu1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        width: "50%"
    },
    icon: {
        height: 35, 
        width: 35, 
        color: Colors.white, 
        cursor: "pointer",
        border: "1px solid white",
        borderRadius: "50%",
        padding: 5
    }
}