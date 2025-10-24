// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDke8jLjE5GtMNcN3tBtPDtVEvOhhpEvfQ",
  authDomain: "foodzy-d057d.firebaseapp.com",
  projectId: "foodzy-d057d",
  storageBucket: "foodzy-d057d.firebasestorage.app",
  messagingSenderId: "465227017348",
  appId: "1:465227017348:web:7300e9437467cebc8666d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)