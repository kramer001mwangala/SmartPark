// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1Pc-fAuZ7gJF8p5XVkJcHx3Jje5WibMs",
  authDomain: "smartpark-e7ad5.firebaseapp.com",
  projectId: "smartpark-e7ad5",
  storageBucket: "smartpark-e7ad5.appspot.com",
  messagingSenderId: "157099831073",
  appId: "1:157099831073:web:4c0e376c9e9833277dd860",
  measurementId: "G-9KWQ8GBLV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;
