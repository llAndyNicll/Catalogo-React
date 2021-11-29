import { NavLink } from "react-router-dom";
import React from "react";

export const LoginScreen = () => {

    return (
        <>

            <li className="navbar-list" >
                <NavLink
                    className="navbar-link" to="/registro" activeClassName="active">REGISTRARSE
                </NavLink>
            </li>
              
            <li className="navbar-list" >
                <NavLink 
                    className="navbar-link" to="/inicio-secion" activeClassName="active">INGRESAR
                </NavLink>
            </li>

        </>
    );

}; 