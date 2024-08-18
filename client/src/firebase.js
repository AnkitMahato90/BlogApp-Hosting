// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'blogapp-8c2b2.firebaseapp.com',
  projectId: 'blogapp-8c2b2',
  storageBucket: 'blogapp-8c2b2.appspot.com',
  messagingSenderId: '612740699465',
  appId: '1:612740699465:web:62d7690424f00197ef3698',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
