import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import frlocale from '@fullcalendar/core/locales/fr'
import { Box, Typography } from '@mui/material';
import styles from './style'
import Pikaday from 'pikaday'

const DemoApp = () => {
    const calendarRef = React.useRef(null);
    const pickerRef = React.useRef(null)

    const renderEventContent = ({ event }) => {
        return (
            <Box>
                <Typography>{event.extendedProps.heure_debut}</Typography>
                <Typography fontWeight={'bold'}>{event.extendedProps.civ + " " + event.title}</Typography>
            </Box>
        );
    }

    const handlePikadayDateChange = (date) => {
        if (date) {
            calendarRef.current.getApi().gotoDate(new Date(date));
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
            <Typography sx={styles.practitionerTile}>BERTRAND Guillaume</Typography>
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
                slotDuration={'00:05:00'}
                slotLabelInterval={'00:30:00'}
                nowIndicator={true}
                datesAboveResources={true}
                dayMaxEventRows={true}
                allDaySlot={false}
                weekNumbers={true}
                stickyHeaderDates={true}
                height={'auto'}
                customButtons={customButtons}
                events={[
                    {
                        id: 1,
                        title: 'DONGMO Donald',
                        start: '2023-07-11T08:00:00',
                        end: '2023-07-11T08:10:00',
                        description: 'Ceci est un événement important',
                        heure_debut: "08:00",
                        civ: "M."
                    },
                ]}
                headerToolbar={{
                    left: 'prev,next today miniCalendar',
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

export default DemoApp