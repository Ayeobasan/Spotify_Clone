// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBefOX3uk2GRaqJPKSPssNbzQvCGGwFzs",
  authDomain: "johnspotifyclone.firebaseapp.com",
  projectId: "johnspotifyclone",
  storageBucket: "johnspotifyclone.appspot.com",
  messagingSenderId: "845836792331",
  appId: "1:845836792331:web:9f3810aa5135e4fc60cd0e",
  measurementId: "G-7E52QNRY7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);