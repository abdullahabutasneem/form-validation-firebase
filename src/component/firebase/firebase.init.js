// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBLqVEuNhYnFAMmeOYMWriYlrvKQzS9as",
  authDomain: "form-validation-firebase-aacb4.firebaseapp.com",
  projectId: "form-validation-firebase-aacb4",
  storageBucket: "form-validation-firebase-aacb4.appspot.com",
  messagingSenderId: "864810460916",
  appId: "1:864810460916:web:644b41cb5d64abb16f60a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;