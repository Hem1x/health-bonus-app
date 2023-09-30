// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDXhn0iWONrXUvB6ZTzqmvgJdoyhds5sYg',
  authDomain: 'health-app-400520.firebaseapp.com',
  projectId: 'health-app-400520',
  storageBucket: 'health-app-400520.appspot.com',
  messagingSenderId: '1081369411125',
  appId: '1:1081369411125:web:c18ef469f48befa088fb7c',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
