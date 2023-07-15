import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
import { API_ID, API_KEY } from "./API";
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "react-notes-7af88.firebaseapp.com",
  projectId: "react-notes-7af88",
  storageBucket: "react-notes-7af88.appspot.com",
  messagingSenderId: "700374102199",
  appId:API_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")