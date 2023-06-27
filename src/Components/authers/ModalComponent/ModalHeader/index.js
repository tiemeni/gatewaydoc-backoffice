import { Box } from '@mui/material'
import React from 'react'
import { Colors } from "../../../../Constants/colors"
import ClearIcon from '@mui/icons-material/Clear';


const styles = {
    height: "7%",
    backgroundColor: Colors.primary,
    width: "100%",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20
}

function ModalHeader({ title, onClose }) {
    return (
        <div style={styles}>
            <Box>
                <h4 style={{ color: Colors.white }}>{title?.toString()?.toUpperCase()}</h4>
            </Box>
            <Box>
                <ClearIcon onClick={() => onClose()} style={{ height: 25, width: 25, cursor: 'pointer', color: '#254f78' }} />
            </Box>
        </div>
    )
}

export default ModalHeader