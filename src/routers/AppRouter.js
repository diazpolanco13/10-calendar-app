import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { CalendarScreen } from '../components/calendar/CalendarScreen'
import { startChecking } from "../actions/authAction";

export const AppRouter = () => {
    
    const dispatch = useDispatch()
       
    useEffect(() => {
            
        dispatch(startChecking())
    
    }, [dispatch])

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/register" component={RegisterScreen} />
                    <Route exact path="/" component={CalendarScreen} />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
