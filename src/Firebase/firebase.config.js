// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPqDNPmyawoki7-qBOx6Ya-RYiD3Pj4rM",
  authDomain: "dragon-news-project-8832a.firebaseapp.com",
  projectId: "dragon-news-project-8832a",
  storageBucket: "dragon-news-project-8832a.firebasestorage.app",
  messagingSenderId: "666474087530",
  appId: "1:666474087530:web:4d9ef6f519bd57ff4b7613"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)