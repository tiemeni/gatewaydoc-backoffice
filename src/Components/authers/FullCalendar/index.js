import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import frlocale from '@fullcalendar/core/locales/fr'
import { Box, Typography } from '@mui/material';
import styles from './style'


const renderEventContent = ({ event }) => {
    return (
        <Box>
            <Typography>{event.extendedProps.heure_debut}</Typography>
            <Typography fontWeight={'bold'}>{event.extendedProps.civ + " " + event.title}</Typography>
        </Box>
    );
}
export default class DemoApp extends React.Component {
    render() {
        return (
            <Box>
                <Typography sx={styles.practitionerTile}>BERTRAND Guillaume</Typography>
                <FullCalendar
                    plugins={[dayGridPlugin, resourceTimeGridPlugin, interactionPlugin]}
                    initialView="timeGridWeek"
                    weekends={true}
                    dayCount={true}
                    locale={frlocale}
                    initialDate={"2023-07-09T08:00:00"}
                    eventContent={renderEventContent}
                    slotMinTime={"08:00:00"}
                    slotMaxTime={"18:00:00"}
                    slotDuration={'00:05:00'}
                    slotLabelInterval={'00:30:00'}
                    nowIndicator={true}
                    datesAboveResources={true}
                    dayMaxEventRows={true}
                    allDaySlot={false}
                    weekNumbers={true}
                    stickyHeaderDates={true}
                    height={'auto'}
                    events={[
                        {
                            id: 1,
                            title: 'DONGMO Donald',
                            start: '2023-07-09T08:00:00',
                            end: '2023-07-09T08:10:00',
                            description: 'Ceci est un événement important',
                            heure_debut: "08:00",
                            civ: "M."
                        },
                    ]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay',
                    }}
                    slotLabelFormat={{
                        hour: 'numeric',
                        minute: '2-digit',
                        omitZeroMinute: false,
                        meridiem: 'short',
                    }}
                />
            </Box>
        )
    }
}