import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startRegisterWithEmailPasswordName } from "../../../actions/auth";
import { useForm } from "../../../hooks/useForm/useForm";
import { useHistory } from "react-router";
import validator from "validator";
import { removeError, setError } from "../../../actions/ui";

export const RegistrarseScreen = () => {

    const state = useSelector( state => state.ui );

    const { msgError } = state;

    const history = useHistory()

    const dispatch = useDispatch();

    const [ inputValue, handleInputChange ] = useForm({

        name: '',
        email: '',
        password: '',
        password2: ''

    });

    const { name, email, password, password2 } = inputValue;

    const handleRegister = ( e ) => {

        e.preventDefault();

        if ( isFormValid() ) {

            dispatch( startRegisterWithEmailPasswordName( email, password, name ) );

            history.push( '/inicio' );

        };

    };

    const isFormValid = () => {

        if ( name.trim().length === 0 ) {

            // console.log( 'Name is Requerid' )

            dispatch( setError( 'Nombre es requerido' ) );
            
            return false

        } else if ( !validator.isEmail( email ) ) {

            // console.log( 'Email is not value' )

            dispatch( setError( 'El correo electrónico no es valido' ) );

            return false

        } else if ( password !== password2 || password.length < 5 ) {

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

                <h1>REGISTRARSE</h1>

                {    
                    msgError &&

                    (                 
                        <div className="auth__alert-error">

                            { msgError }

                        </div> 
                    )
                }

                <form onSubmit={ handleRegister }>

                    <div className="planilla">
                    <input
                        type="text"
                        placeholder="Nombre"
                        name="name" 
                        autoComplete="off"
                        className="auth__input"
                        value={ name }
                        onChange={ handleInputChange }
                    />

                    <input
                        type="text"
                        placeholder="Email"
                        name="email" 
                        autoComplete="off"
                        className="auth__input"
                        value={ email }
                        onChange={ handleInputChange }
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        name="password" 
                        autoComplete="off"
                        className="auth__input"
                        value={ password }
                        onChange={ handleInputChange }
                    />

                    <input
                        type="password"
                        placeholder="Confirmar Contraseña"
                        name="password2" 
                        autoComplete="off"
                        className="auth__input"
                        value={ password2 }
                        onChange={ handleInputChange }
                    />

                    <button
                        type="submit"
                        className="btn btn-primary btn-block mb-5"
                    >
                        Registrarse
                    </button>

                    <div className="registro-link">
                    <Link
                        to="/inicio-secion"
                        className="link"
                    >
                        Si ya estas registrado, Ingresa aqui 
                    </Link>
                    </div>

                    </div>

                </form>
            </div>

        </div>
    );

};