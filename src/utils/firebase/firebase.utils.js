import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDd2WSWF9Kga0oG32tPFCHn8ZAfk9kcaE8",
  authDomain: "crown-clothing-5ad93.firebaseapp.com",
  projectId: "crown-clothing-5ad93",
  storageBucket: "crown-clothing-5ad93.appspot.com",
  messagingSenderId: "319452692237",
  appId: "1:319452692237:web:e5cc88b3109755a8467a44",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);