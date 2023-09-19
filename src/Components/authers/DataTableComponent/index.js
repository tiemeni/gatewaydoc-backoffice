import {
    Create,
    HighlightOff,
    MoreVert
} from "@mui/icons-material"
import {
  Skeleton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from "@mui/material";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box } from "@mui/system"
import React from "react"
import { styles } from "./style"
import { Link } from "react-router-dom"
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import swal from "sweetalert";

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }
TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };
export const DataTable = ({ object, loading, dataField, dataInfo, rowsPerPage= 5, rowsPerPageOptions=[5, 10, 25, { label: 'Tous', value: -1 }], page= 0, onPageChange=()=>{}, onRowsPerChange=()=>{} }) => {
    
    
    const handleChangePage = (event, newPage) => {
        onPageChange(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
      onRowsPerChange(parseInt(event.target.value, 10));
      
    };   
    const deleteRessource = (id)=>{
      swal({
        title: "etes vous sur ?",
        text: "Une fois supprimé, vous ne pourrez plus récupérer cette ressource",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          
          swal("Ressource supprime avec success", {
            icon: "success",
          });
        } else {
         
        }
      });
    }
    if(loading){
      return <TableContainer>
        <Box style={styles.sectionTitle} mt={2}>
            <Typography fontSize={14}>
                Chargement de la ressource {object ?? "Objet" + "(s)"}
            </Typography>
        </Box>  
        <Skeleton variant="rounded" style={{ marginTop: "5px" }} width={"100%"} height={"60vh"}>
        </Skeleton>    
      </TableContainer>
    }
    return (
        <TableContainer>
            <Box style={styles.sectionTitle} mt={2}>
                <Typography fontSize={14}>
                    Gestion des {object ?? "Objet" + "(s)"}
                </Typography>
            </Box>
            <Paper sx={{ width: '100%' }} style={{ overflow: "scroll"}}>
            {(dataField?.length > 0 && dataInfo.length > 0) &&
                <Table stickyHeader sx={{ minWidth: 650, maxWidth: "100vw" }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {dataField?.flatMap((column, i) => <TableCell key={i} sx={[styles.fs14, styles.tabHead]} align="center">{column?.label}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                        ? dataInfo.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : dataInfo
                        )?.flatMap((info, i) => {
                            return (
                                <TableRow key={`${i}${info._id}`}>
                                    {dataField.map((column, index) => {
                                        return (
                                            <>
                                                {column?.label === "Actions" ?
                                                    <TableCell sx={styles.fs14} align='center'>
                                                        <Link to={`modification/${info._id}`}>
                                                            <Create fontSize='large' />
                                                        </Link>
                                                        <Link href="#" onClick={()=>deleteRessource(info._id)} style={{ marginLeft: 10 }} >
                                                            <HighlightOff fontSize='large' color='error' />
                                                        </Link>
                                                    </TableCell>
                                                    :
                                                    <TableCell key={column?.label} sx={{ ...styles.fs14, textAlign: 'center' }} align="center">
                                                        {(column.name === 'groups' || column.name === 'civility') ? info[column.name]?.label || info[column.name]?.title : info[column.name]?.toString()}
                                                    </TableCell>
                                                }
                                            </>
                                        )
                                    })}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                    <TableFooter>
                        {
                          dataInfo.length > rowsPerPage   &&                        <TableRow>
                          <TablePagination
                          
                          rowsPerPageOptions={rowsPerPageOptions}
                          colSpan={4}
                          count={dataInfo.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          SelectProps={{
                              inputProps: {
                              'aria-label': 'rows per page',
                              },
                              native: true,
                          }}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                          ActionsComponent={TablePaginationActions}
                          />
                      </TableRow>
                        }

                        </TableFooter>
                </Table>}
            </Paper>
        </TableContainer>
    )
}