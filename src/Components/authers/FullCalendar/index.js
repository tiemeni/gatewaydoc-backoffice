import React, { useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { connect, useDispatch, useSelector } from "react-redux";
import interactionPlugin from '@fullcalendar/interaction';
import frlocale from '@fullcalendar/core/locales/fr'
import { Box, Typography } from '@mui/material';
import styles from './style'
import Pikaday from 'pikaday'
import { getEvents } from '../../../services/calendars';
import { saveEvents } from '../../../REDUX/calendar/actions';
import { Tooltip, tooltipClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import { getEventsByPractionner } from "../../../services/calendars";
import { getPraticiens } from '../../../services/praticiens';
import { savePraticiens } from '../../../REDUX/praticiens/actions';
import LanguageIcon from '@mui/icons-material/Language';
import ReplyIcon from '@mui/icons-material/Reply';
import EventContextMenu from '../EventContextMenu';

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));


const DemoApp = ({ filterEvents }) => {
    const calendarRef = React.useRef(null);
    // const pickerRef = React.useRef(null)
    const dispatch = useDispatch();
   
    const praticiens = useSelector((state) => state.Praticiens.praticiens)

    localStorage.setItem('idP', praticiens[0]?._id)

    const RessourcePraticiens = praticiens.map((item, index) => {
        return { ...item, id: item._id, title: item.name };
      });



    useEffect(()=>{
        async function fetchData() {
            const response = await getPraticiens();
    
            if (response.success !== true) {
            return;
            }

            dispatch(savePraticiens(response.data))
        }
        fetchData()
    }, [])

    const events = useSelector((state) => state.Calendar.events)

    const CustomEvents =  filterEvents.map((ev)=>{
        // ev.start= ev.date.split("T")[0]+"T"+ev.timeStart
        // ev.end= ev.date.split("T")[0]+"T"+ev.timeEnd
        ev.title= ev.motif
        ev.id= ev._id

        return ev;
    })






    const pickerRef = React.useRef(null);
    const [choosenEvent, setChoosenEvent] = React.useState(null);
    const [showContextMenu, setshowContextMenu] = React.useState(false);
    const [mouseXY, setMouseXY] = React.useState({x:0, y:0});
  
    const renderEventContent = ({ event }) => {

        return (
            <LightTooltip disableFocusListener disableTouchListener followCursor
                title={
                    <div style={{ fontSize: '16px', backgroundColor:"white", height: 'auto' }}>
                        <div>
                            <div>
                                <span style={{ color: '#6e706f', fontWeight:"bold" }} >{event.extendedProps?.civility}</span>
                                <span style={{ color: '#6e706f', fontWeight:"bold" }} >{" "+event.extendedProps?.patient?.name}</span>
                                <span style={{ color: '#6e706f', fontWeight:"bold" }} >{ " "+ event.extendedProps?.patient?.surname}</span>
                            </div>
                            <div>
                                <span style={{ color: '#6e706f', fontWeight:"bold" }}>Durée: </span>
                                <span style={{ color: 'black' }}>{event.extendedProps?.duration}</span>
                            </div>
                            <div>
                                <span style={{ color: '#6e706f', fontWeight:"bold" }}>Motif: </span>
                                <span style={{ color: 'black' }}>{event.extendedProps?.motif}</span>
                            </div>
                            <div>
                                <span style={{ color: '#6e706f', fontWeight:"bold" }}>Telephone: </span>
                                <span style={{ color: 'black' }}>{event.extendedProps?.patient.telephone}</span>
                            </div>
                            <div>
                                <span style={{ color: '#6e706f', fontWeight:"bold" }}>Praticien: </span>
                                <span style={{ color: 'black' }}>{event.extendedProps?.name}</span>
                            </div>
                            <div>
                                <span style={{ color: '#6e706f', fontWeight:"bold" }}>Provenance: </span>
                                <span style={{ color: 'black', fontWeight:"bold" }}>{event.extendedProps?.provenance}</span>
                            </div>
                        </div>  

                    </div>
                }>
                {/* <Box sx={{ display:'flex', flexDirection: 'row', gap: '5px', height:'100%' }}>
                    <Typography>{event.extendedProps.timeStart}</Typography>
                    <Typography fontWeight={'bold'}>{event.extendedProps.civility + " " + event.extendedProps.name}</Typography>
                    <Box>
                        { event.extendedProps.provenance==="backoffice"? <LanguageIcon />:
                            event.extendedProps.wasMoved==true? <ReplyIcon/>:''
                        }
                    </Box>
                </Box > */}
                <Box>
                    <div
                    onContextMenu={(e) => {
                        e.preventDefault();
                        setMouseXY({x: e.clientX, y: e.clientY});
                        setChoosenEvent(event);
                        hideContextenu(false);
                    }}
                    style={{ display:'flex', flexDirection: 'row', gap: '5px', height:'100%' }}
                    >
                        <Typography>{event.extendedProps.timeStart}</Typography>
                        <Typography fontWeight={'bold'}>{event.extendedProps.civility + " " + event.extendedProps.name}</Typography>
                        <Box>
                            { event.extendedProps.provenance==="backoffice"? <LanguageIcon />:
                                event.extendedProps.wasMoved==true? <ReplyIcon/>:''
                            }
                        </Box>
                    </div>
                </Box>
            </LightTooltip>

        );
    }
    // -- display contextMenu
    const hideContextenu = (value) => setshowContextMenu(!value);

    const handlePikadayDateChange = (date) => {
        if (date) {
            calendarRef.current.getApi().gotoDate(new Date(date));
            // set ressource
        }
    };

    const customButtons = {
        miniCalendar: {
            icon: 'btn-miniCalendar',
            click: function () {
                pickerRef.current.show();
            },
        },
    };

    React.useEffect(() => {

        if(localStorage.getItem('defaultPraticien')){
            async function fetchData() {
                // const response = await getEvents();
                const response = await getEventsByPractionner(localStorage.getItem('defaultPraticien'));
                
          
                if (response.success !== true) {
                  return;
                }
                
                dispatch(saveEvents(response.data))
              }
            fetchData();
        }



        const picker = new Pikaday({
            field: document.querySelector(".fc-miniCalendar-button"),
            format: 'yy-mm-dd',
            onSelect: handlePikadayDateChange,
            i18n: {
                previousMonth: 'Mois précedent',
                nextMonth: 'Mois prochain',
                months: [
                    'Janvier',
                    'Février',
                    'Mars',
                    'Avril',
                    'Mai',
                    'Juin',
                    'Juillet',
                    'Août',
                    'Septembre',
                    'Octobre',
                    'Novembre',
                    'Décembre',
                ],
                weekdays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
                weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
            },
            firstDay: 1,
            showWeekNumber: true
        });
        pickerRef.current = picker;

        return () => {
            picker.destroy();
        };
    }, []);

    return (
        <Box>
            <EventContextMenu
                left={mouseXY.x}
                top={mouseXY.y}
                calendarEvent={choosenEvent}
                isVisible={showContextMenu}
                onHideNeeded={hideContextenu}
                permissions={["copy", "cut", "move", "delete", "print", "receipt", "abort", "justify", "discuss", "profiling", "urgence"]}
            />
            <Typography sx={styles.practitionerTile}>BERTRAND Guillaume</Typography>
            { console.log(CustomEvents) }
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, resourceTimeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                weekends={true}
                dayCount={true}
                locale={frlocale}
                initialDate={new Date()}
                eventContent={renderEventContent}
                slotMinTime={"08:00:00"}
                slotMaxTime={"18:00:00"}
                slotDuration={"00:05:00"}
                slotLabelInterval={"00:30:00"}
                nowIndicator={true}
                datesAboveResources={true}
                dayMaxEventRows={true}
                allDaySlot={false}
                weekNumbers={true}
                stickyHeaderDates={true}
                height={"auto"}
                customButtons={customButtons}
                events={CustomEvents}
                resources={CustomEvents}

                // events={[
                //     {
                //     id: 1,
                //     title: "DONGMO Donald",
                //     start: "2023-07-11T08:00:00",
                //     end: "2023-07-11T08:10:00",
                //     description: "Ceci est un événement important",
                //     heure_debut: "08:00",
                //     civ: "M.",
                //     },
                // ]}
                headerToolbar={{
                    left: "prev,next today miniCalendar",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                slotLabelFormat={{
                    hour: "numeric",
                    minute: "2-digit",
                    omitZeroMinute: false,
                    meridiem: "short",
                }}
            />
        </Box>
    );
}

export default DemoApp