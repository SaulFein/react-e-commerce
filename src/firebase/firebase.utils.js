import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAz8BAKk0GRZMQZkfEU-dqTM5dAPc5n4VQ",
  authDomain: "react-e-commerce-db-7db23.firebaseapp.com",
  databaseURL: "https://react-e-commerce-db-7db23.firebaseio.com",
  projectId: "react-e-commerce-db-7db23",
  storageBucket: "react-e-commerce-db-7db23.appspot.com",
  messagingSenderId: "333795310721",
  appId: "1:333795310721:web:adc12700f330f7513de180",
  measurementId: "G-ZZ0BCG89ZE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;