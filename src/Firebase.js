import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAfbhWcUO_Sl2TXnrvGWWL1l1WcedsELfw",
  authDomain: "apt-trainer-237718.firebaseapp.com",
  projectId: "apt-trainer-237718",
  storageBucket: "apt-trainer-237718.appspot.com",
  messagingSenderId: "1042764220811",
  appId: "1:1042764220811:web:d13f82d61ea82e5905c78e",
  measurementId: "G-S36NES88HR",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;
