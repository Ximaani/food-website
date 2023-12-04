// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_0cakI0IfGwXwOczQqk59uIUuIECyoBU",
  authDomain: "fir-foodi-client-6a86a.firebaseapp.com",
  projectId: "fir-foodi-client-6a86a",
  storageBucket: "fir-foodi-client-6a86a.appspot.com",
  messagingSenderId: "1088238387616",
  appId: "1:1088238387616:web:57594e39131958c3e2e4c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;