// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIRBASE_API_KEY,
  authDomain: "todolist-1-aa985.firebaseapp.com",
  projectId: "todolist-1-aa985",
  storageBucket: "todolist-1-aa985.firebasestorage.app",
  messagingSenderId: "550483666934",
  appId: "1:550483666934:web:09781e9e64d531837709d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);