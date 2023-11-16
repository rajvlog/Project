// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBTgzMqfoRU3fwYtFOEaHGsguj6oJRqAVc",
  authDomain: "netflix-project-a58df.firebaseapp.com",
  projectId: "netflix-project-a58df",
  storageBucket: "netflix-project-a58df.appspot.com",
  messagingSenderId: "641815323763",
  appId: "1:641815323763:web:881e92d795e6c892f3b606",
  measurementId: "G-2R2617RHQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
