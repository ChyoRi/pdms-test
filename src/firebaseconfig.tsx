import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPpncxsw6-M6CvwfqvDFCOXgnUuHXo44o",
  authDomain: "pdms-eda37.firebaseapp.com",
  projectId: "pdms-eda37",
  storageBucket: "pdms-eda37.firebasestorage.app",
  messagingSenderId: "62711519276",
  appId: "1:62711519276:web:1d66a26228c184d135d989"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { firestore, auth, db }