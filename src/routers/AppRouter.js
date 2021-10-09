import React, {useEffect, useState} from "react";
import {firebase} from '../firebase/firebase-config';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { useDispatch } from "react-redux";
import { login } from "../components/actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setCheking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( user => {
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }
            setCheking(false);
        })
    }, [dispatch, checking])
 


    if(checking){
        return (
            <h1>Loading...</h1>
        )
    } 

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        isAuthenticated = { isLoggedIn }
                        path="/auth"
                        component={ AuthRouter }
                    />

                    <PrivateRoute 
                        isAuthenticated = { isLoggedIn }
                        exact
                        path="/"
                        component={ JournalScreen }
                    />  

                    <Redirect to="/auth/login"/>

                </Switch>
            </div>
        </Router>
    )
}
