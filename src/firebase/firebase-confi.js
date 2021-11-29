import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyARexwaWm6Tmeg3jqv9xyusfbRX2Hsin-Q",
    authDomain: "catalogo-supermercado-app.firebaseapp.com",
    projectId: "catalogo-supermercado-app",
    storageBucket: "catalogo-supermercado-app.appspot.com",
    messagingSenderId: "269870725977",
    appId: "1:269870725977:web:158d1449209b9839676a48",
    measurementId: "G-5MN1THTGVK"
};

firebase.initializeApp( firebaseConfig );

const db = firebase.firestore();

export {
    db,
    firebase
};