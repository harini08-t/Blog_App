// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-fe070.firebaseapp.com",
  projectId: "blog-app-fe070",
  storageBucket: "blog-app-fe070.firebasestorage.app",
  messagingSenderId: "604200245888",
  appId: "1:604200245888:web:371ae2c5ea8e6a52bba465"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
