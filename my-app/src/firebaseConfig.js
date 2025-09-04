import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFXPRQIeCoccOUFAF-yra3zNqes0YhV-s",
  authDomain: "uniadmissionform.firebaseapp.com",
  projectId: "uniadmissionform",
  storageBucket: "uniadmissionform.firebasestorage.app",
  messagingSenderId: "417159146667",
  appId: "1:417159146667:web:158edf18b35833564b5bee",
  measurementId: "G-HRKL6PG6BY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
