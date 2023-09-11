import React, { useEffect, useMemo, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { connect, useDispatch, useSelector } from "react-redux";
import interactionPlugin from '@fullcalendar/interaction';
import frlocale from '@fullcalendar/core/locales/fr'
import { Box, Button, FormControlLabel, Grid, Skeleton, Stack, Switch, Tooltip, tooltipClasses, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import styles from './style'
import Pikaday from 'pikaday';
import { getEvents } from '../../../services/calendars';
import { saveEvents } from '../../../REDUX/calendar/actions';
import { getEventsByPractionner } from "../../../services/calendars";
import { getPraticiens } from '../../../services/praticiens';
import LanguageIcon from '@mui/icons-material/Language';
import ReplyIcon from '@mui/icons-material/Reply';
import EventContextMenu from '../EventContextMenu';
import { setShowPraticienPlanning, showPFRDV, showPRDV } from '../../../REDUX/commons/actions';
import { getPraticienById } from '../../../services/praticiens';
import { save } from '../../../REDUX/praticiens/actions';

import praticiensActions from "../../../REDUX/praticiens/actions";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { CalendarMonth } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import ModalComponent from "../ModalComponent";
import StepperForm from "./StepperForm"

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

const PlanningCalendar = ({ praticien }) => {
    const calendarRef = React.useRef(null);
    // const pickerRef = React.useRef(null)
    const dispatch = useDispatch();
    const [praticienData, setPraticienData] = useState({});
    const [praticienLoading, setPraticienLoading] = useState(false);
    const [praticienLoadingError, setPraticienLoadingError] = useState(false);

    // localStorage.setItem('idP', praticiens[0]?._id)

    // const RessourcePraticiens = praticiens.map((item, index) => {
    //     return { ...item, id: item._id, title: item.name };
    //   });
  

    const loadPraticien = async (id) =>{
      setPraticienLoading(true);
      try{
        const { data } = await getPraticienById(id);
        setPraticienData(data)
      }catch(e){
        setPraticienLoadingError(e);
      }
      
      setPraticienLoading(false);
    }
    useEffect(()=>{
      loadPraticien(praticien);
    },[praticien])

 




    const pickerRef = React.useRef(null);
    const [choosenEvent, setChoosenEvent] = React.useState(null);
    const [modalOpen, setOpenModal] = React.useState(false);

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
                <Box onClick={()=>dispatch(showPFRDV(true,event))}>
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
    const goToHomePage = ()=>{
      dispatch(setShowPraticienPlanning(null))
    }
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
    if (localStorage.getItem('idP')) {
      async function fetchData() {
        // const response = await getEvents();
        const response = await getEventsByPractionner(localStorage.getItem('idP'));
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



  const closeModal = ()=>{
    setOpenModal(false)
  }
  const openModal = ()=>{
    setOpenModal(true);
  }
  return (
    <Box>
      <ModalComponent open={modalOpen} onClose={closeModal} contentComponent={<StepperForm title={<Typography textAlign={'center'} variant='h4' component='h2' >{`Organisation du plannign pour le praticien ${praticienData.name}`}</Typography> } praticien={praticienData}></StepperForm>} ></ModalComponent>
      <EventContextMenu
        left={mouseXY.x}
        top={mouseXY.y}
        calendarEvent={choosenEvent}
        isVisible={showContextMenu}
        onHideNeeded={hideContextenu}
        permissions={["copy", "cut", "move", "delete", "print", "receipt", "abort", "justify", "discuss", "profiling", "urgence"]}
      />
      <Box style={{ backgroundColor: "#eaeaea", marginBottom: "15px", padding: " 5px 5px 10px 5px"}}>
        <Box>
          {
            praticienLoading? <Skeleton  width={400} height={55}></Skeleton> :         <Typography variant='h4' component={'h1'}>
            Planning Pour Dr {" "}
            
            <Typography variant='h4' component={"span"}  noWrap>{praticienData.name}</Typography>
          </Typography>
          }

          
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={8}>

          <Box sx={{ '& > :not(style)': {
          ml: 1,
          mt: 1
        },}}>
            <Button variant="contained" disableElevation onClick={openModal}> <AddCircleOutlineOutlinedIcon/> <Typography color="white"  fontSize={14} textTransform={"capitalize"}> {" "}Ajouter une tranche</Typography></Button>
            <Button variant="contained" disableElevation color="error" > <DeleteOutlineOutlinedIcon/> <Typography fontSize={14} color="white" textTransform={"capitalize"}> {" "}Supprimer une tranche</Typography> </Button>
            <Button variant="contained" disableElevation color="info"><Typography color="white" fontSize={14} textTransform={"capitalize"}> {" "}Creer une maquette</Typography></Button>
            <Button variant="contained" disableElevation><Typography color="white" fontSize={14} textTransform={"capitalize"}> {" "}Voir les maquettes</Typography></Button>
          </Box>
          <Box sx={{
            mt: 2
          }}>
            <IconButton>
              <CalendarMonth></CalendarMonth>
            </IconButton>
            <Button variant="contained" disableElevation color="success"><Typography color="white" fontSize={14} textTransform={"capitalize"}> {" "}Copier la semaine</Typography></Button> 

          </Box>
        </Grid>
        <Grid item xs={4} >
          <Stack direction="column" alignItems="flex-end" justifyContent="end">
           
            <Typography>Planning {" "} {<Switch   defaultChecked onClick={goToHomePage} />}</Typography>
            <Button variant="contained" disableElevation color="info">Auttorisation rdv force</Button>
          </Stack>
         
         
        </Grid>
      </Grid>

      </Box>  
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
        slotLabelInterval={"00:15:00"}
        nowIndicator={true}
        datesAboveResources={true}
        dayMaxEventRows={true}
        allDaySlot={false}
        weekNumbers={true}
        stickyHeaderDates={true}
        height={"auto"}
        customButtons={customButtons}
        events={[]}
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

export default PlanningCalendar;