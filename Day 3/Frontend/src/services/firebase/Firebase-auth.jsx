// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-R0USN0tYaOVvWzTTdmvY_ZFZoiFkIQ0",
  authDomain: "birthday-bash-29e0c.firebaseapp.com",
  projectId: "birthday-bash-29e0c",
  storageBucket: "birthday-bash-29e0c.appspot.com",
  messagingSenderId: "306878034855",
  appId: "1:306878034855:web:e58490b1bf76b95df7bc82",
  measurementId: "G-XYXW9ZR60X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app };
