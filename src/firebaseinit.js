// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDK7zDTjoLG9pfdES7cVZMwSV4lna9Zro",
  authDomain: "assignment-12-9b20c.firebaseapp.com",
  projectId: "assignment-12-9b20c",
  storageBucket: "assignment-12-9b20c.appspot.com",
  messagingSenderId: "309231588663",
  appId: "1:309231588663:web:7d44c6e60013f3457ef6b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
