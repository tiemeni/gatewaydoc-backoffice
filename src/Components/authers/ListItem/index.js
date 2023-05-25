import { Box } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Colors } from '../../../Constants/colors';
import { useState } from 'react';


function ListItem() {
    const [open, setOpen] = useState(false)
    return (
        <Box>
            <Box height={25} ml={2} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} borderBottom={"1px solid " + Colors.primary}>
                <Box display={'flex'} flexDirection={'row'}>
                    <Box><input style={{ accentColor: Colors.primary, mixBlendMode: "multiply", }} type="checkbox" /></Box>
                    <Box marginLeft={1}><p style={{  cursor: "pointer" }}
                        onClick={() => {
                            setOpen(v => !v)
                        }}>OPHTALMOLOGISTE</p></Box>
                </Box>
                <Box>
                    <AddIcon style={{ height: 20, width: 20 }} />
                </Box>
            </Box>
            <Box>
                {open && [1, 2, 3].map((e, i) => <Box height={25} ml={2} display={'flex'} flexDirection={'row'} paddingLeft={1}>
                    <Box display={'flex'} flexDirection={'row'}>
                        <Box><input style={{ accentColor: Colors.primary, mixBlendMode: "multiply", }} type="checkbox" /></Box>
                        <Box marginLeft={1}><p>Praticien test {i}</p></Box>
                    </Box>
                    <Box>
                        <AddIcon style={{ height: 20, width: 20 }} />
                    </Box>
                </Box>)}
            </Box>
        </Box>
    )
}

export default ListItem