import { types } from "../types/types";

/*
{
        id: new Date().getTime(),
        title: 'Cumple de Ani',
        start: moment().toDate(),
        end: moment().add(1, 'hours').toDate(),
        notes: 'Ani es mi amor, solo con ella vivo la felicidad',
        user: {
            _id: '1313',
            name: 'Carlos'
        }
    }
*/


const initialState = {
    events: [],
    activeEvent: null
};


export const calendarReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }
        case types.eventAddNew:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }
        case types.eventClearActiveEvent:
            return {
                ...state,
                activeEvent: null
            }
        case types.eventUpdated:
            return {
                ...state,
                events: state.events.map(
                    e => (e.id === action.payload.id) ? action.payload : e
                )
            }
        case types.eventDeleted:
            return {
                ...state,
                events: state.events.filter(
                    e => (e.id !== state.activeEvent.id) 
                ),
                activeEvent: null
            }
        default:
            return state;
    }

}