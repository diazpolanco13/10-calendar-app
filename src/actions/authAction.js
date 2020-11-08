import Swal from "sweetalert2"
import { fetchWhitToken, fetchWithoutToken } from "../helpers/fetch"
import { types } from "../types/types"

/*-------------------------------------------------------------
Iniciar sesion y obtencion de token 
-------------------------------------------------------------*/
export const startLogin = (email, password) => {
    
    return async (dispatch) => {
//Envio de datos del usuario para la autenticacion con el backend
        const resp = await fetchWhitToken('auth', {email, password}, 'POST')
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
        } else {
            Swal.fire('Error', body.msg,'error' )
        }
    }
}


/*-------------------------------------------------------------
Crear usuario y obtencion de token 
-------------------------------------------------------------*/

export const startRegister = (name, email, password) => {
    return async (dispatch) => {
        
        //Envio de datos del usuario para el registro en la BD 
        const resp = await fetchWithoutToken('auth/new', { name,  email , password}, 'POST')
        const body = await resp.json()


        //Si la respuesta del body es ok, grabar el token y fijar la hora en el localStorage
        
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            
        // Se dispara la accion login, se dispara el inicio de sesion para dejar al usuario registrado autrenticado inmeidatamente
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));

        } else {
            Swal.fire('Error', body.msg,'error' )
            }
        }
}

export const startChecking = () => {
    return async ( dispatch ) => {
        //Envio de datos del usuario para el registro en la BD 
        const resp = await fetchWhitToken('auth/renew')
        const body = await resp.json()

        //Si la respuesta del body es ok, grabar el token y fijar la hora en el localStorage
        
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            
        // Se dispara la accion login, se dispara el inicio de sesion para dejar al usuario registrado autrenticado inmeidatamente
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));

        } else {

            dispatch(checkingFinish());            
        }
    }
} 


/*-------------------------------------------------------------
Funciones locales comunes 
-------------------------------------------------------------*/
const login = (user) => ({
    type: types.authLogin,
    payload: user
});

const checkingFinish = () => ({
    type: types.authCheckingFinish
})