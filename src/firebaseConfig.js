// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbYBWKByQpb2KZAt5FmPYoQ-2q2D-FV8g",
  authDomain: "auth-74d3e.firebaseapp.com",
  projectId: "auth-74d3e",
  storageBucket: "auth-74d3e.appspot.com",
  messagingSenderId: "945994075883",
  appId: "1:945994075883:web:0003aae955ba1f50a038ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
