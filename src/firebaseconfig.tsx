import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5aFUQbtG1rShW-1O88aZjCG7uErNxmgQ",
  authDomain: "pdms-test-8a5cc.firebaseapp.com",
  projectId: "pdms-test-8a5cc",
  storageBucket: "pdms-test-8a5cc.firebasestorage.app",
  messagingSenderId: "631678861167",
  appId: "1:631678861167:web:5cd775b77e53535700329a"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { firestore, auth, db }