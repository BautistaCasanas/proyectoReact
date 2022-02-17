
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDD5b7vlfvtZKznjy7_pZcOZhWvXJtGQ0",
  authDomain: "allshop-47f08.firebaseapp.com",
  projectId: "allshop-47f08",
  storageBucket: "allshop-47f08.appspot.com",
  messagingSenderId: "734204489611",
  appId: "1:734204489611:web:8ad1de55fb00a12acbc98e"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);