// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth
 } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6VY055TrUhv6nBrLGC2f2fGr2udIcyZ8",
  authDomain: "cardvault-e4417.firebaseapp.com",
  projectId: "cardvault-e4417",
  storageBucket: "cardvault-e4417.appspot.com",
  messagingSenderId: "616131450271",
  appId: "1:616131450271:web:79abbb933d4ddcf22199aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)



