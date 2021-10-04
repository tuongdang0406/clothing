// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsRWSOa9Q1f_HOAr7_CJsP5cxJmAgMam4",
  authDomain: "shop-db-a9e3c.firebaseapp.com",
  projectId: "shop-db-a9e3c",
  storageBucket: "shop-db-a9e3c.appspot.com",
  messagingSenderId: "740843342120",
  appId: "1:740843342120:web:7e03894b45a8c33540281d",
  measurementId: "G-V19YRW3MET",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
