// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqKp11pjGWcFB-9vKhmEdAyseB4uPDq1M",
  authDomain: "fir-demo-11a30.firebaseapp.com",
  projectId: "fir-demo-11a30",
  storageBucket: "fir-demo-11a30.appspot.com",
  messagingSenderId: "162137132569",
  appId: "1:162137132569:web:f61d515fb68373edf9e488"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
