// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXKMxUFbK3QL8ilgwwAUx2u-EwyhBLP0c",
  authDomain: "hotel-704e6.firebaseapp.com",
  projectId: "hotel-704e6",
  storageBucket: "hotel-704e6.appspot.com",
  messagingSenderId: "866537948777",
  appId: "1:866537948777:web:7d5dbe28e3f77d53d7c4f8",
  measurementId: "G-9BRECLHLXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);