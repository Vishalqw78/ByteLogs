// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "bloggs-4ee86.firebaseapp.com",
  projectId: "bloggs-4ee86",
  storageBucket: "bloggs-4ee86.appspot.com",
  messagingSenderId: "313053314909",
  appId: "1:313053314909:web:8cd7d359d5be7f80cc72b4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);