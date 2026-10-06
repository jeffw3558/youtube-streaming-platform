// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from "firebase/auth";
import { getFunctions } from "firebase/functions";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqDQWPuHPvQbzFARnX10ef6A_7J3yG7Ro",
  authDomain: "yt-streaming-platform.firebaseapp.com",
  projectId: "yt-streaming-platform",
  storageBucket: "yt-streaming-platform.firebasestorage.app",
  messagingSenderId: "955607775989",
  appId: "1:955607775989:web:d0fa81c3eb1cd66a4523bc",
  measurementId: "G-J0VSLL4ZJ8"
};

// Initialize Firebase (reuse the existing app on hot reload)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);

export const functions = getFunctions(app);

/**
 * Signs the user in with a Google popup.
 * @returns A promise that resolves with the user's credentials.
 */
export function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * Signs the user out.
 * @returns A promise that resolves when the user is signed out.
 */
export function signOut() {
  return auth.signOut();
}

/**
 * Trigger a callback when user auth state changes.
 * @returns A function to unsubscribe callback.
 */
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
