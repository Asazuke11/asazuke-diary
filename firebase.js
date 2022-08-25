// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtbQhGH6RyP3WY-WnLfke8bC77QvjfztY",
  authDomain: "asazuke-diary.firebaseapp.com",
  projectId: "asazuke-diary",
  storageBucket: "asazuke-diary.appspot.com",
  messagingSenderId: "83015751269",
  appId: "1:83015751269:web:a516e2443041825d26d88c",
  measurementId: "G-QXPXQX62VJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if(typeof window !== 'undefined'){
  const analytics = getAnalytics(app);
}