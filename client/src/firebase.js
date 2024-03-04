// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-blog-fad53.firebaseapp.com",
  projectId: "mern-blog-fad53",
  storageBucket: "mern-blog-fad53.appspot.com",
  messagingSenderId: "849135289276",
  appId: "1:849135289276:web:9d06353aa48eeb4f6221b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

