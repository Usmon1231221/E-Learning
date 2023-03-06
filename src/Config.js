import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAbTiDKlTX7wSZvIVHlL5IgHKfUD_GOdtU",
  authDomain: "magic-7d0aa.firebaseapp.com",
  projectId: "magic-7d0aa",
  storageBucket: "magic-7d0aa.appspot.com",
  messagingSenderId: "1025135784086",
  appId: "1:1025135784086:web:e6079c760e8e74304dd2b7",
  measurementId: "G-R3N1BKLT0P"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()