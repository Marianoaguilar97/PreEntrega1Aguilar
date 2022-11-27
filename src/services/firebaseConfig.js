import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBBrUHOLLivtzjQX1xfCmlbAEUjSVLPPn0",
  authDomain: "react-45060-marianoaguilar.firebaseapp.com",
  projectId: "react-45060-marianoaguilar",
  storageBucket: "react-45060-marianoaguilar.appspot.com",
  messagingSenderId: "806821295945",
  appId: "1:806821295945:web:1cadc56de4aefdb2330c98"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);