// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB02lyFL4lSyN4OEv1m5QpPjtzZuMeUXY8",
  authDomain: "workshop-97873.firebaseapp.com",
  projectId: "workshop-97873",
  storageBucket: "workshop-97873.appspot.com",
  messagingSenderId: "1096810874877",
  appId: "1:1096810874877:web:7f5fc5d97e4e2abfa17b94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);

export { auth };
