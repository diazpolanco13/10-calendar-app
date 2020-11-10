import { fetchWhitToken } from "../helpers/fetch";
import { types } from "../types/types";

/* --------------------------------------------------------------
*--------------------- Guardar eventos en la BD
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

//*Anadimos el evento en redux
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

export const eventUpdated = (event) => ({
    type: types.eventUpdated,
    payload: event

});
export const eventDeleted = () => ({
    type: types.eventDeleted,
});