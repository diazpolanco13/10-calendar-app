import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { CalendarScreen } from '../components/calendar/CalendarScreen'
import { startChecking } from "../actions/authAction";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
    
    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth)
       
    useEffect(() => {
            
        dispatch(startChecking())
    
    }, [dispatch])
    
    if (checking) {
        return (
            <h5>Cargando...</h5>
        )
    }


    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginScreen}
                        isAutenticated={ !!uid }
                    />
                    <PublicRoute
                        exact
                        path="/register"
                        component={RegisterScreen}
                        isAutenticated={ !!uid }
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        component={CalendarScreen}
                        isAutenticated={ !!uid }
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
