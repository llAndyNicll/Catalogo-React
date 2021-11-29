import { firebase } from "../../firebase/firebase-confi";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
import { RaizRouter } from "./RaizRouter";
import { login } from "../../actions/auth";
import { startLoadingProducts } from "../../actions/products";

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState( true );

    useEffect( () => {

        firebase.auth().onAuthStateChanged( async( user ) => {

            if ( user?.uid ) {

                dispatch( login( user.uid, user.displayName ) );

            }

            setChecking( false );

        });

    }, [ dispatch, setChecking ] );

    useEffect( () => {

        dispatch( startLoadingProducts() );

    }, [ dispatch ] );

    if ( checking ) {

        return (
            <div className="mante animate__animated animate__fadeIn animate__faster">

                <img src='https://c.tenor.com/MP2bE8ZPpwMAAAAC/cargando-loading.gif' alt='mantenimiento' />

            </div>
        );

    };

    return (
        <Router>

            <div>

                <Switch>

                    <Route path="/" component={ RaizRouter } ></Route>

                </Switch>

            </div>

        </Router>
    );

};