// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0ThB7LY76fXQsFr8_NN3b8wsJ07zJIMc",
  authDomain: "fire-f5b27.firebaseapp.com",
  projectId: "fire-f5b27",
  storageBucket: "fire-f5b27.firebasestorage.app",
  messagingSenderId: "259216603161",
  appId: "1:259216603161:web:972bcc19d37f97d1555288",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
