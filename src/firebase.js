
import firebase from "firebase";
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNHP2iTI7dUXV9qrfV9qF1B-rpmjeieFQ",
  authDomain: "slack-clone-d0b52.firebaseapp.com",
  projectId: "slack-clone-d0b52",
  storageBucket: "slack-clone-d0b52.appspot.com",
  messagingSenderId: "598935281655",
  appId: "1:598935281655:web:d446fb22524e97bc05d8f2"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{ auth, provider, db };
