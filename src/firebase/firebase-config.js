import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBenWMTchjcVlP6a8xIQEIokwNWJKxepvI",
    authDomain: "journal-app-9ebea.firebaseapp.com",
    projectId: "journal-app-9ebea",
    storageBucket: "journal-app-9ebea.appspot.com",
    messagingSenderId: "734571078752",
    appId: "1:734571078752:web:97e7744c001f18e644cf05"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase,
};