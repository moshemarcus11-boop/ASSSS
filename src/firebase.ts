// src/firebase.ts

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
  appId: "1:1063995028212:web:5a1c8440fb1140754c64a1",
  measurementId: "G-CP5P9MV8WP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
