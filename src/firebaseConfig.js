import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCR4GIO3a1qxVJV6rZmQw7Ry5Cf_MxBBfs",
    authDomain: "ejemplo-68b64.firebaseapp.com",
    projectId: "ejemplo-68b64",
    storageBucket: "ejemplo-68b64.firebasestorage.app",
    messagingSenderId: "29122782911",
    appId: "1:29122782911:web:5b3a1b87552abde0d6c80a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//obtentemos la base de datos
const db = getFirestore(app);

export { db };


  