import {
    Create,
    HighlightOff,
    MoreVert
} from "@mui/icons-material"
import {
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
import { Link } from "react-router-dom"


export const DataTable = ({ object, dataField, dataInfo }) => {
    console.log(dataInfo, dataField)
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
                            {dataField?.map((column, i) => <TableCell key={i} sx={[styles.fs14, styles.tabHead]} align="center">{column.label}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(dataInfo.length > 0) && dataInfo?.map((info, i) => {
                            return (
                                <TableRow key={info._id}>
                                    {dataField.map((column, index) => {
                                        return (
                                            <>
                                                {column.label === "Actions" ?
                                                    <TableCell sx={styles.fs14} align='center'>
                                                        <Link to={`add/${info._id}`}>
                                                            <Create fontSize='large' />
                                                        </Link>
                                                        <Link href="#" style={{ marginLeft: 10 }}>
                                                            <HighlightOff fontSize='large' color='error' />
                                                        </Link>
                                                    </TableCell>
                                                    :
                                                    <TableCell key={column.label} sx={{ ...styles.fs14, textAlign: 'center' }} align="center">
                                                        {(column.name === 'groups' || column.name === 'civility') ? info[column.name].label || info[column.name].title : info[column.name]?.toString()}
                                                    </TableCell>
                                                }
                                            </>
                                        )
                                    })}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>}
        </TableContainer>
    )
}