// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGLHrQwDKqI1_JfGbhHAQppjzOuIubCyc",
  authDomain: "thermacamp.firebaseapp.com",
  databaseURL: "https://thermacamp-default-rtdb.firebaseio.com",
  projectId: "thermacamp",
  storageBucket: "thermacamp.firebasestorage.app",
  messagingSenderId: "1063995028212",
  appId: "1:1063995028212:web:4af53569e0b78c114c64a1",
  measurementId: "G-LBJXMV2CW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
