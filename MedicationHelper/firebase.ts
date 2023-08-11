import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyACIs4M9C2yu4EqZ0gkAXXOBKlJ4iLdvFU",
  authDomain: "medication-helper-b7100.firebaseapp.com",
  databaseURL: "https://medication-helper-b7100-default-rtdb.firebaseio.com",
  projectId: "medication-helper-b7100",
  storageBucket: "medication-helper-b7100.appspot.com",
  messagingSenderId: "250555420526",
  appId: "1:250555420526:web:228c2c4614f9e4dc307b7f",
  measurementId: "G-2PPFKH72D0"
};

const app = firebase.initializeApp(firebaseConfig);

export default firebase;