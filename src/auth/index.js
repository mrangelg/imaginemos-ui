import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYV6v--1nlMP3dIFxL0V_molXnmRThHdM",
  authDomain: "imaginemos-ui.firebaseapp.com",
  databaseURL: "https://imaginemos-ui.firebaseio.com",
  projectId: "imaginemos-ui",
  storageBucket: "imaginemos-ui.appspot.com",
  messagingSenderId: "11703869301",
  appId: "1:11703869301:web:f5b66c401833f1524a3d3c",
  measurementId: "G-2D90J95W53"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  return auth
    .signInWithPopup(provider)
    .then(result => result.user)
    .catch(error => error.message);
};
