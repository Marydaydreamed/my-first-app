// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmH_U9cZuXBQNTP6TwBoymCe9a-UVnwHg",
  authDomain: "marygramma-61c87.firebaseapp.com",
  projectId: "marygramma-61c87",
  storageBucket: "marygramma-61c87.appspot.com",
  messagingSenderId: "449283398697",
  appId: "1:449283398697:web:4d654092068a9f516e9038",
  measurementId: "G-CKT80JER6D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
