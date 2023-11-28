import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA1H-hf-sWhtScnIv-6nw9AUVC9cor9u8c",
  authDomain: "newsportal-signup.firebaseapp.com",
  projectId: "newsportal-signup",
  storageBucket: "newsportal-signup.appspot.com",
  messagingSenderId: "609071573152",
  appId: "1:609071573152:web:e1adc8cb00e3d3757f81c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth();

export {app,auth};