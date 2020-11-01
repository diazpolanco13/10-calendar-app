import { types } from "../types/types";
import moment from 'moment'

const initialState = {
    events: [{
        title: 'Cumple de Ani',
        start: moment().toDate(),
        end: moment().add(1, 'hours').toDate(),
        notes: 'Ani es mi amor, solo con ella vivo la felicidad',
        user: {
            _id: '1313',
            name: 'Carlos'
        }
    }],
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
        default:
            return state;
    }

}