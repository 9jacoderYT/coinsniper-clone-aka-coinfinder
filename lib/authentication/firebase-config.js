import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6MaTbckhZzJzZJARlzeKMLyBKbSR68rI",
  authDomain: "coinfinder-a78ba.firebaseapp.com",
  projectId: "coinfinder-a78ba",
  storageBucket: "coinfinder-a78ba.appspot.com",
  messagingSenderId: "584470487361",
  appId: "1:584470487361:web:b486d3e273aa7c282581c0",
  measurementId: "G-72L4H2M4EQ",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);



// Create User Document
