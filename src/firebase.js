// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjq6S5plQebiY6kYskY8QxWA-UstNm6o8",
  authDomain: "clone-8d703.firebaseapp.com",
  projectId: "clone-8d703",
  storageBucket: "clone-8d703.appspot.com",
  messagingSenderId: "472797024090",
  appId: "1:472797024090:web:d4cc92361800af90c2ad63",
  measurementId: "G-YH415DVG5V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
