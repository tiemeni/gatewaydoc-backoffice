import { Box } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Colors } from '../../../Constants/colors';


function ListItem() {
    return (
        <Box>
            <Box height={25} ml={2} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} borderBottom={"1px solid " + Colors.primary}>
            <Box display={'flex'} flexDirection={'row'}>
                {/* <Checkbox classes={{ root: 'custom-checkbox-root' }} {...label} defaultChecked /> */}
                <Box><input style={{ accentColor: Colors.primary, mixBlendMode: "multiply", }} type="checkbox" /></Box>
                <Box marginLeft={1}><p style={{ fontWeight: 'bold' }}>OPHTALMOLOGISTE</p></Box>
            </Box>
            <Box>
                <AddIcon style={{ height: 20, width: 20 }} />
            </Box>
        </Box>
        <Box></Box>
        </Box>
    )
}

export default ListItem