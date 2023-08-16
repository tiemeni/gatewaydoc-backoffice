import React, { useEffect, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
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
import { showPFRDV, showPRDV } from "../../REDUX/commons/actions";
import { getEventsByPractionner } from '../../services/calendars'
import { getEvents } from "../../services/calendars";
import { saveEvents } from "../../REDUX/calendar/actions";
import { getPraticiensByJob } from "../../services/praticiens";
import { saveEventsPractionner } from "../../REDUX/calendar/actions";
import { savePraticiens } from "../../REDUX/praticiens/actions";
import { savePraticiensPerJob } from "../../REDUX/praticiens/actions";
import dayjs from "dayjs";


const FackContainer = () => {
    const dispatch = useDispatch()
    const showRDV = useSelector(state => state.Common.showPRDV);
    const event = useSelector(state => state.Common.event)
    const showFRDV = useSelector(state => state.Common.showPFRDV);
    const [events, setEvents] = useState(null)

    const praticiensList = useSelector((state) => state.Praticiens.praticienJob)
    const idPracti = useSelector((state) => state.Calendar.eventsPractionerId)
    const FilterEvent = useSelector((state) => state.Calendar.events)

    const CustomEvents = FilterEvent.map((ev) => {
        ev.start = ev.date.split("T")[0] + "T" + ev.timeStart
        ev.end = ev.date.split("T")[0] + "T" + ev.timeEnd

        return ev;
    })


    React.useEffect(
        () => {



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


    const handleCheckboxChange = (e) => {


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
        <Box overflowY={"hidden"}>
            <Box style={styles.container}>
                {showRDV &&
                    <ModalComponent
                        title={"Prise de Rendez-vous"}
                        contentComponent={<PriseRdvComponent />}
                        onClose={() => dispatch(showPRDV(false))}
                    />}
                {showFRDV &&
                    <ModalComponent
                        title={`Fiche de Rendez-vous de ${event?._def?.extendedProps?.civility
                        } ${event?._def?.extendedProps?.patient?.name} Ne le ${dayjs(event?._def?.extendedProps?.patient?.birthdate).format('DD/MM/YYYY')
                        } ${dayjs().year() - dayjs(event?._def?.extendedProps?.patient?.birthdate).year()  } ans`}
                        contentComponent={<FichePriseRdvComponent />}
                        onClose={() => dispatch(showPFRDV(false))}
                    />}
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
                            <ListItem boxChange={handleCheckboxChange} data={praticiensList || []} />
                        }
                    </Box>
                </Box>
                <Box style={{ ...styles.planning, marginLeft: "22%", height: 700, overflowY: "scroll", paddingRight: 5 }}>
                    <DemoApp filterEvents={CustomEvents} eventChange={events} />
                </Box>
            </Box>
        </Box>
    )
}

export default FackContainer;