// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsNQnWMivT5UvkDSiEHNhBUKiZZvLcVv0",
  authDomain: "house-marketplace-app-b13e3.firebaseapp.com",
  projectId: "house-marketplace-app-b13e3",
  storageBucket: "house-marketplace-app-b13e3.appspot.com",
  messagingSenderId: "387450716157",
  appId: "1:387450716157:web:89c0ca553fbe8f5595a394"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()