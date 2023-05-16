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
        zIndex: 1,
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
        height: 25, 
        width: 25, 
        color: Colors.white, 
        cursor: "pointer"
    }
}