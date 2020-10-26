import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { Navbar } from '../ui/Navbar'
import { messages } from '../../helpers/calendar-messages'
import { CalendarEvent } from './CalendarEvent'

import moment from 'moment'
import 'moment/locale/es'
import { CalendarModal } from './CalendarModal'

moment.locale('es')



const localizer = momentLocalizer(moment);

const events = [{
    title: 'Cumple de Ani',
    start: moment().toDate(),
    end: moment().add(1, 'hours').toDate(),
    notes: 'Ani es mi amor, solo con ella vivo la felicidad',
    user: {
        _id: '1313',
        name: 'Carlos'
    }
}]

export const CalendarScreen = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDobleClick = (e) => {
        console.log(e);
    }
    const onSelectEvent = (e) => {
        console.log(e);
    }
    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#5850ec',
            borderRadius: '2px',
            opacity: 0.8,
            display: 'block',
            color: 'white',
            
        }

        return {
            style
        }
    }


    return (
        <div>
            <Navbar />
            <div className="px-4 mx-auto mt-8 max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Content goes here */}
                    <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 700 }}
                    messages={messages}
                    eventPropGetter={eventStyleGetter}
                    onDoubleClickEvent={onDobleClick}
                    onSelectEvent={onSelectEvent}
                    onView={onViewChange}
                    view={lastView}
                    components={{
                        event: CalendarEvent
                    }}
                    />
                </div>
            </div>
            <CalendarModal />
        </div>
    )
}
