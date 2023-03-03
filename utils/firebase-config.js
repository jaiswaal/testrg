import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBT8xQnXmbhDAUPpzOH_oBirJm19uHtk3M",
  authDomain: "react-netflix-clone-e5aed.firebaseapp.com",
  projectId: "react-netflix-clone-e5aed",
  storageBucket: "react-netflix-clone-e5aed.appspot.com",
  messagingSenderId: "57240300466",
  appId: "1:57240300466:web:86203bad4168a95a6192ab",
  measurementId: "G-0WKGW4KCFV"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);