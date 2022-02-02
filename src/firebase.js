// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcbV2_GP0jtWASWuPqbs2pVnICEN4CV2g",
  authDomain: "hanghae99-react-mydictionary.firebaseapp.com",
  projectId: "hanghae99-react-mydictionary",
  storageBucket: "hanghae99-react-mydictionary.appspot.com",
  messagingSenderId: "855037866340",
  appId: "1:855037866340:web:eeaf1368e165d80bb58a71",
  measurementId: "G-H3Q09J1PDE",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
