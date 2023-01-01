// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHQHxAiTTxcDpeB0RIa6yyD8DtXGbl9go",
  authDomain: "slack-clone-ff634.firebaseapp.com",
  databaseURL:
    "https://slack-clone-ff634-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "slack-clone-ff634",
  storageBucket: "slack-clone-ff634.appspot.com",
  messagingSenderId: "305660963622",
  appId: "1:305660963622:web:69727b8274cbcde1e5afe7",
  measurementId: "G-CQVZB7Q358",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
