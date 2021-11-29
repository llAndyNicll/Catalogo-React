import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { startLogout } from "../../actions/auth";

export const LoginActive = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const state = useSelector( state => state.auth );

    const { name } = state;

    const handleLogout = () => {

        dispatch( startLogout() );

        history.push( '/inicio' );

    };

    return (
        <>

            <li className="navbar-list logout" >
                <button onClick={ handleLogout }>
                    Logout
                </button>
            </li>
              
            <li className="navbar-list name" >
                { name }
            </li>

        </>
    );

};