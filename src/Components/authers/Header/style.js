import { Colors } from "../../../Constants/colors";


export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItem: "center",
        width: "100%",
        height: 60,
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