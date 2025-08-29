// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1ylGI8QuN8V6RpFfZENDYYDoFsu1Lwq0",
  authDomain: "hrm-project-01.firebaseapp.com",
  projectId: "hrm-project-01",
  storageBucket: "hrm-project-01.firebasestorage.app",
  messagingSenderId: "1025966242343",
  appId: "1:1025966242343:web:2336253d84be1fbfe1ac02",
  measurementId: "G-0CTQSZGJSH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
console.log(auth);
export const googleauth = new GoogleAuthProvider();
