// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4CW_Kosr2fjVMbmgEDpHzMIiOp6H0JcQ",

  authDomain: "keep-25c98.firebaseapp.com",

  projectId: "keep-25c98",

  storageBucket: "keep-25c98.appspot.com",

  messagingSenderId: "707070486771",

  appId: "1:707070486771:web:af20cff358385e416def86",

  measurementId: "G-4Z8EFMN4DE",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, collection, storage };
