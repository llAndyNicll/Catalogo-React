import { firebase } from "../firebase/firebase-confi";
import { types } from "../types/types";
import Swal from "sweetalert2";

export const startLoginEmailPassword = ( email, password ) => {

    return ( dispatch ) => {

        firebase.auth().signInWithEmailAndPassword( email, password )

        .then( ({ user }) => {
    
            dispatch(
                login( user.uid, user.displayName )
            );
    
        })            
        .catch( e => {

            // console.log( e );

            Swal.fire( 'Error', e.message, 'error' );

        });

    };

};

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {

    return ( dispatch ) => {

        firebase.auth().createUserWithEmailAndPassword( email, password )

        .then( async({ user }) => {

            await user.updateProfile( { displayName: name } );

            dispatch( login( user.uid, user.displayName ) );

        })
        .catch( e => {

            // console.log( e );

            Swal.fire( 'Error', e.message, 'error' );

        });


    };

};

export const login = ( uid, displayName ) => ({

    type: types.login,
    payload: {
        uid,
        displayName
    }

});

export const startLogout = () => {

    return async( dispatch ) => {

        await firebase.auth().signOut();

        dispatch( logout() );

    };

};

export const logout = () => ({

    type: types.Logout

});

