import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyD2ny5phDzGiVhmx2aFy5Ya99_BKY2Sbm8",
  authDomain: "react-hooks-blog-24135.firebaseapp.com",
  projectId: "react-hooks-blog-24135",
  storageBucket: "react-hooks-blog-24135.appspot.com",
  messagingSenderId: "1026628513296",
  appId: "1:1026628513296:web:ec3326fd1063805a89e495"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebaseApp)