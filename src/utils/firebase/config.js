import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD6VY055TrUhv6nBrLGC2f2fGr2udIcyZ8",
  authDomain: "cardvault-e4417.firebaseapp.com",
  projectId: "cardvault-e4417",
  storageBucket: "cardvault-e4417.appspot.com",
  messagingSenderId: "616131450271",
  appId: "1:616131450271:web:79abbb933d4ddcf22199aa"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)