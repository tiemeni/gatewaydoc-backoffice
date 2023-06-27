import {
    Create,
    HighlightOff,
    MoreVert
} from "@mui/icons-material"
import {
    Fade,
    Link,
    Paper,
    Popper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { styles } from "./style"


export const DataTable = ({ object, dataField, dataInfo }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open);
    };

    return (
        <TableContainer>
            <Box style={styles.sectionTitle} mt={2}>
                <Typography fontSize={14}>
                    Gestion des {object ?? "Objet" + "(s)"}
                </Typography>
            </Box>
            {(dataField?.length > 0) &&
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {dataField?.map((e, i) => <TableCell key={i} sx={[styles.fs14, styles.tabHead]}>{e}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                            <TableCell sx={styles.fs14}>
                                <Link href="#" onClick={handleClick}>
                                    <MoreVert />
                                </Link>
                                <Popper open={open} anchorEl={anchorEl} placement='bottom-end' transition>
                                    {({ TransitionProps }) => (
                                        <Fade {...TransitionProps} timeout={350}>
                                            <Paper>
                                                <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
                                            </Paper>
                                        </Fade>
                                    )}
                                </Popper>
                            </TableCell>
                            {(dataInfo["user1"]?.length > 0) && dataInfo["user1"]?.map((e, i) => {
                                return (
                                    <TableCell key={i} sx={styles.fs14} align="right">{e}</TableCell>
                                )
                            })}
                            <TableCell sx={styles.fs14} align="right">
                                <Link href="#">
                                    <Create fontSize='large' />
                                </Link>
                                <Link href="#" style={{ marginLeft: 10 }}>
                                    <HighlightOff fontSize='large' color='error' />
                                </Link>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>}
        </TableContainer>
    )
}