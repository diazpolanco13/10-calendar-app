import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es'


import { Navbar } from '../ui/Navbar'
import { messages } from '../../helpers/calendar-messages'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'


import { useDispatch, useSelector } from 'react-redux'
import { uiOpenModal } from '../../actions/uiActions'
import { eventClearActiveEvent, eventSetActive } from '../../actions/eventsAction'


const localizer = momentLocalizer(moment);
moment.locale('es')

export const CalendarScreen = () => {
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');
    const dispatch = useDispatch()
    const { events } = useSelector(state => state.calendar || [])


    const onDobleClick = (e) => {
        dispatch(eventSetActive(e));
        dispatch(uiOpenModal());
    };

    const onSelectEvent = (e) => {
        // dispatch(eventSetActive(e));
        // dispatch(uiOpenModal());
    };

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    };

    //Funcion para detectar el click en cualquier fecha
    const onSelectSlot = (e) => {
        dispatch(eventClearActiveEvent())
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#5850ec',
            borderRadius: '2px',
            opacity: 0.8,
            display: 'block',
            color: 'white',
        };

        return {
            style
        }
    }


    return (
        <div>
            <Navbar />
            <div className="px-4 mx-auto mt-12 mb-12 max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto mt-2">
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
                    onSelectSlot={ onSelectSlot }
                    selectable={ true }
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
