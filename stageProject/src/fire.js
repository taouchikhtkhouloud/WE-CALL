// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe3fBmTtUO-KF9ZrJhAmTxC9843RqKpgE",
  authDomain: "login-f224c.firebaseapp.com",
  projectId: "login-f224c",
  storageBucket: "login-f224c.appspot.com",
  messagingSenderId: "231625560814",
  appId: "1:231625560814:web:cabae762a1b0c1746b19ff",
  measurementId: "G-YT84E58S98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
