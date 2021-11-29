import React from "react";
import { useSelector } from "react-redux";

import {
  NavLink,
} from "react-router-dom";
import { LoginActive } from "./LoginActive";
import { LoginScreen } from "./LoginScreen";
import { HomeEditWeb } from "./HomeEditWeb";

import "./navbar.css";

export const Navbar = () => {

    const state = useSelector( state => state.auth );

    const { name } = state;

    return (
        <div className="navbar" >

            <div className="navbar-decoracion">
                <h1>.</h1>
            </div>

            <nav className="navbar-nav" >
                <ul className="navbar-ul" >

                    <img src="https://sabesa.com.sv/wp-content/uploads/2014/10/walmart-logo.png" alt="logo" />

                    <li className="navbar-list" >
                        <NavLink
                            className="navbar-link" to="/inicio" activeClassName="active">INICIO
                        </NavLink>
                    </li>

                    <li className="navbar-list" >
                        <NavLink 
                            className="navbar-link" to="/catalogo" activeClassName="active">CATALOGO
                        </NavLink>
                    </li>

                    <li className="navbar-list" >
                        <NavLink 
                            className="navbar-link" to="/ofertas" activeClassName="active">OFERTAS
                        </NavLink>
                    </li>


                    <li className="navbar-list" >
                        <NavLink 
                            className="navbar-link" to="/sobre-nosotros" activeClassName="active">SOBRE NOSOTROS
                        </NavLink>
                    </li>

                    <li className="navbar-list" >
                        <NavLink 
                            className="navbar-link" to="/contactos" activeClassName="active">LOCALES
                        </NavLink>
                    </li>

                    {
                        ( name === 'Home Edit Web' )
                            &&
                                ( <HomeEditWeb /> )
                    }

                    {
                        ( !name ) 
                            &&
                                ( <LoginScreen /> )
                    }

                    {
                        ( name )
                            &&
                                ( <LoginActive /> )
                    }
              
                </ul>
            </nav>

            <hr />

        </div>

    );

};