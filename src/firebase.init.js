// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWIze0ig21YAgtaut049qs0bk5kK0mr9A",
  authDomain: "jsxsneaker.firebaseapp.com",
  projectId: "jsxsneaker",
  storageBucket: "jsxsneaker.appspot.com",
  messagingSenderId: "5111160175",
  appId: "1:5111160175:web:19d29950efccdd18bfdc9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app);
export default auth;
