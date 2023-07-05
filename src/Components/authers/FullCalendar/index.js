import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default class DemoApp extends React.Component {
    render() {
        return (
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                weekends={true}
                dayCount={true}
                events={[
                    { title: 'event 1', date: '2019-04-01' },
                    { title: 'event 2', date: '2023-05-05' },
                    { title: 'event 3', date: '2023-05-05' },
                    { title: 'event 4', date: '2023-05-05' },
                    { title: 'event 5', date: '2023-05-05' },
                    { title: 'event 5', date: '2023-05-05' }
                ]}
            />
        )
    }
}