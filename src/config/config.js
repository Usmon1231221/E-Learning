import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB4EEWxr3JJsVribwrMXHKCtOMiKkX_FjM",
  authDomain: "e-learning-ceba7.firebaseapp.com",
  projectId: "e-learning-ceba7",
  storageBucket: "e-learning-ceba7.appspot.com",
  messagingSenderId: "866256610605",
  appId: "1:866256610605:web:532a958a6b32851595dfa4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()