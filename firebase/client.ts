// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBbch10VVIke9YUlKp2iIYYmegoggr7u5s",
  authDomain: "prepmate-d4a3c.firebaseapp.com",
  projectId: "prepmate-d4a3c",
  storageBucket: "prepmate-d4a3c.firebasestorage.app",
  messagingSenderId: "523238046990",
  appId: "1:523238046990:web:5cc67a86d39c8227082b5f",
  measurementId: "G-HV2E65HRP7"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);