import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAK4RpBCMsK52SdPUOTlmyE19-IEcHUcH4",
  authDomain: "minha-feira-d84c7.firebaseapp.com",
  projectId: "minha-feira-d84c7",
  storageBucket: "minha-feira-d84c7.appspot.com",
  messagingSenderId: "925205821372",
  appId: "1:925205821372:web:1c5a134488e4da980b9db9",
  measurementId: "G-3MJ00PJ9V3",
};

export const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
