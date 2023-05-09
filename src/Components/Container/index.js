import { Box, TextField } from "@mui/material";
import Header from "../authers/Header";
import { styles } from "./style";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { Colors } from "../../Constants/colors";
import DemoApp from "../authers/FullCalendar";
import "./style.css"
import AddIcon from '@mui/icons-material/Add';
import ListItem from "../authers/ListItem";


const FackContainer = () => {
    return (
        <Box>
            <Box>
                <Header />
            </Box>
            <Box style={styles.container}>
                <Box style={{ ...styles.aside }}>
                    <Box padding={2} marginBottom={3} marginTop={3}>
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
                            [1, 2, 3, 4, 5, 6, 7, 8, 9]
                                .map((e, i) => <ListItem key={i} />)
                        }
                    </Box>
                </Box>
                <Box style={styles.planning}>
                    <DemoApp />
                </Box>
            </Box>
        </Box>
    )
}

export default FackContainer;