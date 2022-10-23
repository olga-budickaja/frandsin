import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCsqKPuZDUFM2vY7dLM1r_V1USJQkLECiw",
    authDomain: "friendsin-5bb0a.firebaseapp.com",
    projectId: "friendsin-5bb0a",
    storageBucket: "friendsin-5bb0a.appspot.com",
    messagingSenderId: "452343136967",
    appId: "1:452343136967:web:fac661be5fae7d9a44f4e2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);