// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOyihsv9qDSGLXjLKAM1GaQFd3s0GOF7c",
  authDomain: "hotel-classic.firebaseapp.com",
  projectId: "hotel-classic",
  storageBucket: "hotel-classic.appspot.com",
  messagingSenderId: "194723282545",
  appId: "1:194723282545:web:b01751ce6393e924db65d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth;
