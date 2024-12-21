// app/services/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { firebaseConfig } from './firebaseConfig'; // your config

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDdKrfQ5nZFoamXfDvAfLlHbtowgE_7xFg",
    authDomain: "amrutum-pharma-assignment.firebaseapp.com",
    projectId: "amrutum-pharma-assignment",
    storageBucket: "amrutum-pharma-assignment.firebasestorage.app",
    messagingSenderId: "369743780049",
    appId: "1:369743780049:web:e33bfc239e2bee2ebf0df0",
    measurementId: "G-M1MT33W2D4"
  };
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(firebaseApp);
