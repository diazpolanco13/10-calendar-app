import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types"


export const startLogin = (email, password) => {
    
    return async (dispatch) => {
//Envio de datos del usuario para la autenticacion con el backend
        const resp = await fetchSinToken('auth', {email, password}, 'POST')
        const body = await resp.json()
        
//Si la respuesta del body es ok, grabar el token y fijar la hora en el localStorage
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

// Se dispara la accion login, se envia el uid del usuario y el nombre al state
            dispatch(login({
                uid: body.uid,
                name: body.name
            }) )
        }
    }
}


const login = ( user ) => ({
    type: types.authLogin,
    payload: user
})