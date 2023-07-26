import { Box, TextField } from "@mui/material";
import { styles } from "./style";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { Colors } from "../../Constants/colors";
import DemoApp from "../../Components/authers/FullCalendar";
import "./style.css"
import ListItem from "../../Components/authers/ListItem";
import ModalComponent from "../../Components/authers/ModalComponent";
import PriseRdvComponent from "../../Components/authers/PriseRdvComponentWrapper";
import FichePriseRdvComponent from "../../Components/authers/FichePriseRdvComponentWrapper";
import { useDispatch, useSelector } from "react-redux";
import { showPRDV } from "../../REDUX/commons/actions";
import { showPFRDV } from "../../REDUX/commons/actions";


const FackContainer = () => {
    const dispatch = useDispatch();
    const showRDV = useSelector(state => state.Common.showPRDV);
    const showFRDV = useSelector(state => state.Common.showPFRDV);
    return (
        <Box overflowY={"hidden"}>
            <Box style={styles.container}>
                {/* prise de rdv */}
                {showRDV &&
                    <ModalComponent
                        title={"Prise de Rendez-vous"}
                        contentComponent={<PriseRdvComponent />}
                        onClose={() => dispatch(showPRDV(false))}
                    />}
                {/* ******************* */}
                {/* prise de rdv */}
                {showFRDV &&
                    <ModalComponent
                        title={"Fiche de Rendez-vous de M. Attaiech131 Pat1231, ne(e) le 00/00/0000, 13 ans, IPP:"}
                        contentComponent={<FichePriseRdvComponent />}
                        onClose={() => dispatch(showPFRDV(false))}
                    />}
                {/* ******************* */}
                <Box style={{ ...styles.aside, position: "fixed", paddingRight: 20 }} className='aside'>
                    <Box padding={2} marginBottom={3} marginTop={10} >
                        <TextField
                            className='text-field-input'
                            InputProps={{
                                sx: {
                                    borderRadius: 1,
                                    fontSize: 15,
                                    height: 40,
                                    backgroundColor: "white"
                                }
                            }}
                            name='name'
                            type='text'
                            variant='outlined'
                            placeholder='Rechercher'
                            fullWidth
                        // helperText={errors.nameError}
                        />
                    </Box>
                    <Box backgroundColor={Colors.black} height={35} mb={2} >
                        <Box style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", position: 'relative' }}>
                            <ArrowDropDownOutlinedIcon style={{ width: 25, height: 25, marginLeft: 2, color: Colors.white }} />
                        </Box>
                    </Box>
                    <Box>
                        {
                            [6, 7, 8, 9]
                                .map((e, i) => <ListItem key={i} />)
                        }
                    </Box>
                </Box>
                <Box style={{ ...styles.planning, marginLeft: "22%", height: 700, overflowY: "scroll", paddingRight: 5 }}>
                    <DemoApp />
                </Box>
            </Box>
        </Box>
    )
}

export default FackContainer;