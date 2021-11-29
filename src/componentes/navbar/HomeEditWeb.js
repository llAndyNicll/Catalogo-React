import { NavLink } from "react-router-dom";

export const HomeEditWeb = () => {

    return (
        <>

            <li className="navbar-list" >
                <NavLink 
                    className="navbar-link" to="/edit-web" activeClassName="active">EDITAR
                </NavLink>
            </li>

        </>
    );

};