import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import { Navbar } from '../ui/Navbar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment);

const myEventsList = [{
    title: 'Cumple de Ani',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa'
}]

export const CalendarScreen = () => {
    return (
        <div>
            <Navbar />
            <div className="px-4 mx-auto mt-8 max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Content goes here */}
                    <Calendar
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 600 }}
                    />
                </div>
            </div>
        </div>
    )
}
