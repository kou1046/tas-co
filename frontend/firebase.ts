// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLl-cRLEyxpqJQk_OOqjioS8rk3_VyX0A",
  authDomain: "tas-co.firebaseapp.com",
  projectId: "tas-co",
  storageBucket: "tas-co.appspot.com",
  messagingSenderId: "156452614874",
  appId: "1:156452614874:web:df930438652ee92912abe3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
