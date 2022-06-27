// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwKymN1QVIb2JN9V9Lnwc8uCxJsSppuvI",
    authDomain: "react-redux-5b052.firebaseapp.com",
    projectId: "react-redux-5b052",
    storageBucket: "react-redux-5b052.appspot.com",
    messagingSenderId: "602735139413",
    appId: "1:602735139413:web:c9bb1b76e0faafff9652dc"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )