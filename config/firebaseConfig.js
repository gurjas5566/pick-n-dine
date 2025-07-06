// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTzHvDw8In072KXxYk2ZkmRzhnag0J0A8",
  authDomain: "pick-n-dine-efa0a.firebaseapp.com",
  projectId: "pick-n-dine-efa0a",
  storageBucket: "pick-n-dine-efa0a.firebasestorage.app",
  messagingSenderId: "318083599445",
  appId: "1:318083599445:web:927480a6022de400bf98dc",
  measurementId: "G-X0PG6TD4WN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
