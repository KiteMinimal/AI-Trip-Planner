import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_APIKEY,
  authDomain: import.meta.env.FIREBASE_APIKEY_AUTHDOMAIN,
  projectId: import.meta.env.FIREBASE_APIKEY_PROJECTID,
  storageBucket: import.meta.env.FIREBASE_APIKEY_STORAGEBUCKET,
  messagingSenderId: import.meta.env.FIREBASE_APIKEY_MESSAGINGSENDINGID ,
  appId: import.meta.env.FIREBASE_APIKEY_APPID,
  measurementId: import.meta.env.FIREBASE_APIKEY_MEASUREMENTID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);