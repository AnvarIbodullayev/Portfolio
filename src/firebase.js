import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOJ97CgxudPv86wX1mlhN0eZ06kvWLvpg",
  authDomain: "portfolio-f14fb.firebaseapp.com",
  projectId: "portfolio-f14fb",
  storageBucket: "portfolio-f14fb.appspot.com",
  messagingSenderId: "1003712118863",
  appId: "1:1003712118863:web:770f55c84294a8bea56a3a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app