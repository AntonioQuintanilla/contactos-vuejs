import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgL611hmu-MXaiz9uDFpRr-TjdtXT-els",
  authDomain: "contactos-6b8b8.firebaseapp.com",
  projectId: "contactos-6b8b8",
  storageBucket: "contactos-6b8b8.appspot.com",
  messagingSenderId: "912300489024",
  appId: "1:912300489024:web:1e1a937654299e4dd7a2a5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export { db }