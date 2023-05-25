import { Box } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Colors } from '../../../Constants/colors';


function ListItem() {
    const [open, setOpen] = useState(true)
    return (
        <Box>
            <Box height={25} ml={2} mb={1} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} borderBottom={"1px solid " + Colors.primary}>
                <Box display={'flex'} flexDirection={'row'}>
                    <Box><input style={{ accentColor: Colors.primary, mixBlendMode: "multiply", }} type="checkbox" /></Box>
                    <Box marginLeft={1}><p style={{ cursor: "pointer" }}
                        onClick={() => {
                            setOpen(v => !v)
                        }}>OPHTALMOLOGISTE</p></Box>
                </Box>
                <Box>
                    <AddIcon style={{ height: 20, width: 20 }} />
                </Box>
            </Box>
            <Box>
                {open && [1, 2, 3].map((e, i) => <Box height={25} ml={2} display={'flex'} alignItems={'center'} flexDirection={'row'} paddingLeft={1}>
                    <Box display={'flex'} flexDirection={'row'}>
                        <Box><input style={{ accentColor: Colors.primary, mixBlendMode: "multiply", }} type="checkbox" /></Box>
                        <Box marginLeft={1}><p>Praticien test {i}</p></Box>
                    </Box>
                    <Box>
                        <AddIcon style={{ height: 15, width: 15, marginBottom: 3 }} />
                    </Box>
                </Box>)}
            </Box>
        </Box>
    )
}

export default ListItem