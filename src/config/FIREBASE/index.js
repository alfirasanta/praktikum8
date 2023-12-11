import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyBjawi6s_GuuQzvzeZN6Xs9LC17ayxT2fg",
  authDomain: "noteapp-6ad78.firebaseapp.com",
  databaseURL: "https://noteapp-6ad78-default-rtdb.firebaseio.com",
  projectId: "noteapp-6ad78",
  storageBucket: "noteapp-6ad78.appspot.com",
  messagingSenderId: "195013474499",
  appId: "1:195013474499:web:b5421f3dc753dde0224a76"
});

const FIREBASE = firebase;

export default FIREBASE;