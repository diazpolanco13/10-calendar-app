import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { Navbar } from '../ui/Navbar'
import { messages } from '../../helpers/calendar-messages'

import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')



const localizer = momentLocalizer(moment);

const myEventsList = [{
    title: 'Cumple de Ani',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#5850ec',
}]

export const CalendarScreen = () => {

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#5850ec',
            borderRadius: '2px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    }


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
                    messages={messages}
                    eventPropGetter={eventStyleGetter}
                    />
                </div>
            </div>
        </div>
    )
}
