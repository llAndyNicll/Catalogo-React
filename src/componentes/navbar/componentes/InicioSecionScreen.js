import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../../hooks/useForm/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startLoginEmailPassword } from "../../../actions/auth";
import { useHistory } from "react-router";
import validator from "validator";
import { removeError, setError } from "../../../actions/ui";

export const InicioSecionScreen = () => {

    const state = useSelector( state => state.ui );

    const { msgError } = state;

    const history = useHistory();

    const dispatch = useDispatch()

    const [ inputValue, handleInputChange ] = useForm({

        email: '',
        password: ''

    });

    const { email, password } = inputValue;

    const handleLogin = ( e ) => {

        e.preventDefault();

        if ( isFormValid() ) {

            dispatch( startLoginEmailPassword( email, password ) );

            history.push( '/inicio' );

        }

    };

    const isFormValid = () => {

        if ( !validator.isEmail( email ) ) {

            // console.log( 'Email is not value' )

            dispatch( setError( 'El correo electrónico no es valido' ) );

            return false

        } else if ( password.length < 5 ) {

            // console.log( 'Password should be at least 6 characters and match each other' )

            dispatch( setError( 'La contraseña debe tener al menos 6 caracteres y coincidir entre sí' ) );

            return false

        }

        dispatch( removeError() );

        return true;

    };

    return (
        <div className="registrarse animate__animated animate__fadeIn animate__faster">

            <div className="registro">

                <h1>INGRESAR</h1>

                {    
                    msgError &&

                    (                 
                        <div className="auth__alert-error">

                            { msgError }

                        </div> 
                    )
                }

                <form onSubmit={ handleLogin }>

                <div className="planilla">

                    <input
                        type="text"
                        name="email"
                        placeholder="Email" 
                        autoComplete="off"
                        value={ email }
                        onChange={ handleInputChange }
                    />

                    <input 
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        autoComplete="off"
                        value={ password }
                        onChange={ handleInputChange }
                    />

                    <button
                        type="submit"
                    >
                        Ingresar
                    </button>

                    <div className="registro-link">
                    <Link to="/registro" className="link">
                        No estas Registrado?, Ingresa aqui
                    </Link>
                    </div>

                    </div>

                </form>

            </div>

        </div>
    );

};