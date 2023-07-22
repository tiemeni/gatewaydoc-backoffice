import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import frlocale from '@fullcalendar/core/locales/fr'
import { Box, Typography } from '@mui/material';
import styles from './style';

// daypicker
import { DayPicker } from 'react-day-picker';
import "react-day-picker/dist/style.css";
import './style.css';

const renderEventContent = ({ event }) => {
    return (
        <Box>
            <Typography>{event.extendedProps.heure_debut}</Typography>
            <Typography fontWeight={'bold'}>{event.extendedProps.civ + " " + event.title}</Typography>
        </Box>
    );
}
export default class DemoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDayPicker: false,
      selectedDay: new Date(),
      souris: { x: 0, y: 0 },
    };
    this.calendarRef = React.createRef();
  }
  handleButtonClick = (event) => {
    const { clientX, clientY } = event;
    this.setState((prevState) => ({
      showDayPicker: !prevState.showDayPicker,
      souris: { x: (clientX + 10), y: (clientY + 20) },
    }));
  };

  handleDayClick = (day) => {
    this.setState({
      selectedDay: day,
      showDayPicker: false,
    });
    if (this.calendarRef.current) {
      this.calendarRef.current.getApi().gotoDate(day);
    }
  };

  render() {
    const { showDayPicker, selectedDay, souris } = this.state;
    return (
      <Box>
        {showDayPicker && (
          <div
            className="day-picker-container"
            style={{
              display: showDayPicker ? "block" : "none",
              top: souris.y,
              left: souris.x,
            }}
          >
            <DayPicker
              className="day-picker"
              selected={selectedDay}
              onDayClick={this.handleDayClick}
            />
          </div>
        )}
        <Typography sx={styles.practitionerTile}>BERTRAND Guillaume</Typography>
        <FullCalendar
          ref={this.calendarRef}
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
          events={[
            {
              id: 1,
              title: "DONGMO Donald",
              start: "2023-07-11T08:00:00",
              end: "2023-07-11T08:10:00",
              description: "Ceci est un événement important",
              heure_debut: "08:00",
              civ: "M.",
            },
          ]}
          headerToolbar={{
            left: "prev,next today myCustomButton",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          slotLabelFormat={{
            hour: "numeric",
            minute: "2-digit",
            omitZeroMinute: false,
            meridiem: "short",
          }}
          customButtons={{
            myCustomButton: {
              text: "🗓",
              click: this.handleButtonClick,
            },
          }}
        />
      </Box>
    );
  }
}