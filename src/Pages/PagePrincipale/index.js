import React, { useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import { styles } from "./style";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { Colors } from "../../Constants/colors";
import DemoApp from "../../Components/authers/FullCalendar";
import "./style.css"
import ListItem from "../../Components/authers/ListItem";
import ModalComponent from "../../Components/authers/ModalComponent";
// import PriseRdvComponent from "../../Components/authers/PriseRdvComponentWrapper";
// import FichePriseRdvComponent from "../../Components/authers/FichePriseRdvComponentWrapper";
import { useDispatch, useSelector } from "react-redux";
import { showPRDV } from "../../REDUX/commons/actions";
import { getEventsByPractionner } from '../../services/calendars'
import { getEvents } from "../../services/calendars";
import { saveEvents } from "../../REDUX/calendar/actions";
import { getPraticiensByJob } from "../../services/praticiens";
import { saveEventsPractionner } from "../../REDUX/calendar/actions";
import { savePraticiens } from "../../REDUX/praticiens/actions";
import { savePraticiensPerJob } from "../../REDUX/praticiens/actions";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const FackContainer = () => {
    const dispatch = useDispatch()
    const showRDV = useSelector(state => state.Common.showPRDV)
    const [events, setEvents ]= useState(null)

    const praticiensList = useSelector((state) => state.Praticiens.praticienJob)
    const idPracti = useSelector((state) => state.Calendar.eventsPractionerId)
    const defaultPracti = useSelector((state) => state.Praticiens.praticiens[0]?._id)
    const FilterEvent = useSelector((state) => state.Calendar.events) 

    const [isFirstChildVisible, setIsFirstChildVisible] = useState(true);

    const CustomEvents =  FilterEvent.map((ev)=>{
        ev.start= ev.date.split("T")[0]+"T"+ev.timeStart
        ev.end= ev.date.split("T")[0]+"T"+ev.timeEnd

        return ev;
    })
    

    React.useEffect(
        ()=>{



              async function fetchDataS() {
                // setIsLoading(true);
                // const response = await getEventsByPractionner(idPracti);
                const response = await getPraticiensByJob();
          
                if (response.success !== true) {
                  return;
                }
          
                // setIsLoading(false);
                dispatch(savePraticiensPerJob(response.data))
              }
              fetchDataS()
            
    }, []
    )


    const handleCheckboxChange = (e)=> {


        // const value = event.target.value;
        const isChecked = e.target.checked;
      
        // if (isChecked) {
            // setEvents([...setEvents, event.name]);
            async function fetchData() {
                // setIsLoading(true);
                const response = await getEventsByPractionner(idPracti);
          
                if (response.success !== true) {
                  return;
                }
          
                // setIsLoading(false);
                dispatch(saveEvents(response.data))
              }
              fetchData()
        // } else {
        //     // setEvents(setEvents.filter((val) => val !== event.name));
        // }
    }

    return (
        <Box overflowY={"hidden"} >
            <Box style={{...styles.container, display: 'flex', flexDirection: 'row'}} >
  
                {/* <Box style={{ ...styles.aside, position: "fixed", paddingRight: 20 }} className='aside'> */}
                <Box style={{ ...styles.aside, position: "fixed", paddingRight: 20, display: isFirstChildVisible ? 'block' : 'none' }} className='aside'>
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
                            <ListItem  boxChange={ handleCheckboxChange } data={praticiensList ?? []} defaultPracti={defaultPracti}/>
                        }
                    </Box>
                </Box>

                <Box style={{ ...styles.planning, marginLeft: isFirstChildVisible ? "22%" : "auto", marginRight: isFirstChildVisible ? "auto" : "auto", height: 700, overflowY: "scroll", paddingRight: 5 }}>
                    <DemoApp filterEvents={CustomEvents}  eventChange={events}/>
                </Box>
            </Box>
            <button style={{ position: "absolute", top: '150px', width: '40px', height:'40px',
             borderRadius: '200px', color: 'white', left: '15px', backgroundColor: '#04b7c9', boxShadow: '1px 3px 4px #858282', border: 'none' }} className="btn-toggle" onClick={() => setIsFirstChildVisible(!isFirstChildVisible)}>
            { isFirstChildVisible? <KeyboardArrowLeftIcon/> : <KeyboardArrowRightIcon/>  }

            </button>
        </Box>
    )
}

export default FackContainer;