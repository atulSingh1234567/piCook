
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdVA7ER2T_LBVx439qEVK6b-ijTcZPUeU",
  authDomain: "picook-6ad0e.firebaseapp.com",
  projectId: "picook-6ad0e",
  storageBucket: "picook-6ad0e.appspot.com",
  messagingSenderId: "470601640646",
  appId: "1:470601640646:web:047d02cd90b121d6e005c7",
  measurementId: "G-M2GS2W4C36"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);