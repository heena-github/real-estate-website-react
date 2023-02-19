// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi5R3Vnz5bFQ0Ti2WrGeDmJQJcI-l2FxI",
  authDomain: "real-estate-react-ec8a6.firebaseapp.com",
  projectId: "real-estate-react-ec8a6",
  storageBucket: "real-estate-react-ec8a6.appspot.com",
  messagingSenderId: "233301751817",
  appId: "1:233301751817:web:34f9309e2c8283bc5d20d8"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()