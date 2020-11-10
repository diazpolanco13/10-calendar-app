import Swal from "sweetalert2";
import { fetchWhitToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types";

/* --------------------------------------------------------------
?--------------------- Save events in the database
-----------------------------------------------------------------*/
export const eventStartAddNew = ( event ) => {
    return async ( dispatch, getState ) => {

    //traemos de redux el uid y el name del usuario activo para recontruir el evento
        const { uid, name } = getState().auth;

        try {
    //Enviamos el evento a la BD y traermos el mismo evento guardado como respuesta
            
            const resp = await fetchWhitToken('events', event, 'POST');
            const body = await resp.json();

    //Si se grabo correctamente, le asignamos al evento, el id que nos asigno la BD
            if (body.ok) {
                event.id = body.evento.id;
            
            // ademas le asignamos al evento, la propiedad usuario, con los datos el usuario activo en la sesion
                event.user = {
                    _id: uid,
                    name: name
                }
            //FInalmente anadimos el evento al calendario a traves de redux
                dispatch(eventAddNew( event ))
            }
            
        } catch (error) {
            console.log(error)
        }
        
    }
}

//* Add events in redux
const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
});



export const eventSetActive = (event) => ({ 
    type: types.eventSetActive,
    payload: event
});

export const eventClearActiveEvent = () => ({
    type: types.eventClearActiveEvent

});

/* --------------------------------------------------------------
?------------------Delete event in the BD------------------
-----------------------------------------------------------------*/
export const startEventDelete = () => {
    return async (dispatch, getState) => {
        
        const { id } = getState().calendar.activeEvent;
        console.log(id)
        try {
             // Enviamos la solicitud de eliminacion a la BD 
             const resp = await fetchWhitToken(`events/${id}`, {}, 'DELETE');
             const body = await resp.json();
             
             //Si retorno Ok, es porque se elimino el envento en la BD, entonces //?Disparamos la actualizacion
             if (body.ok) {
                 dispatch(eventDeleted());
 
             } else {
                 Swal.fire('Error', body.msg, 'error')
             }

        } catch (error) {
            console.log(error)
        }
    }
}

const eventDeleted = () => ({
    type: types.eventDeleted,
});

/* --------------------------------------------------------------
?------------------Actualizar eventos de la BD------------------
-----------------------------------------------------------------*/

export const startEventUpdated = (event) => {
    return async (dispatch) => {
        try {
            // Enviamos el nuevo evento a la BD y traermos el mismo evento guardado como respuesta
            const resp = await fetchWhitToken(`events/${event.id}`, event, 'PUT');
            const body = await resp.json();
            //Si retorno Ok, es porque se guardo en la BD, entonces //?Disparamos la actualizacion
            if (body.ok) {
                dispatch(eventUpdated(event));
                
            } else {
                Swal.fire('Error', body.msg, 'error')
            }
            
        } catch (error) {
            console.log(error) 
        };
    };
};

//?-- Actualizamos el evento en redux
const eventUpdated = (event) => ({
    type: types.eventUpdated,
    payload: event
    
});

/* --------------------------------------------------------------
?------------------Cargando eventos de la BD------------------
-----------------------------------------------------------------*/

export const eventStartLoading = () => {
    return async (dispatch) => {
        
        try {
            // Enviamos la solicitud de carga de evetos a la Base de datos
            const resp = await fetchWhitToken('events');
            const body = await resp.json();
            
            // Con este Helpers se cambian las fechas tipo sting a tipo Data()
            const events = prepareEvents(body.eventos);
            
            // Se dispara la carga de evetos al redux
            dispatch(eventLoaded(events));
            
        } catch (error) {
            
        };
    };
};

//?-- Actualizamos el evento en redux
const eventLoaded = (events) => ({
    type: types.eventLoaded,
    payload: events
});


/* --------------------------------------------------------------
?------------------Logout cleaned events of store ------------------
-----------------------------------------------------------------*/

export const eventlogout = () => ({
    type: types.eventlogout
})

