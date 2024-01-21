// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyfm23Ay26-e7tQom5IE0KK4hZfb4gRxU",
  authDomain: "netflixgpt-d63fa.firebaseapp.com",
  projectId: "netflixgpt-d63fa",
  storageBucket: "netflixgpt-d63fa.appspot.com",
  messagingSenderId: "154445821919",
  appId: "1:154445821919:web:817e12ff7378bb974fb66a",
  measurementId: "G-GNXME6JEBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();