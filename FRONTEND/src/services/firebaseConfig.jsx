import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDW_FccJ9eRR1DiupL6ptSAn4kouLu2alU",
  authDomain: "ai-trip-planner-2f561.firebaseapp.com",
  projectId: "ai-trip-planner-2f561",
  storageBucket: "ai-trip-planner-2f561.firebasestorage.app",
  messagingSenderId: "112330516571",
  appId: "1:112330516571:web:cb5e6bb19fac544d85777e",
  measurementId: "G-C7M7NSLXVV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);