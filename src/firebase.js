// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaAg3ldmesU01-Y4yCsn_I_TN5L794q1I",
  authDomain: "whatsapp-clone-b41d6.firebaseapp.com",
  projectId: "whatsapp-clone-b41d6",
  databaseURL: "https://whatsapp-clone-b41d6-default-rtdb.firebaseio.com",
  storageBucket: "whatsapp-clone-b41d6.appspot.com",
  messagingSenderId: "493626570168",
  appId: "1:493626570168:web:a2c9397ca13c0ad2168b4d",
};
// Deploy
//firebase deploy --only hosting:whatsapp-clone-anouar

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db, app, database };
/*{
  "rules": {
    ".read": "now < 1657494000000",  // 2022-7-11
    ".write": "now < 1657494000000",  // 2022-7-11
  }
}*/
