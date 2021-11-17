import firebase from "firebase/compat/app";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB9y6dJpdUfZgSyDQDAFxrmfkg-8hqxGYQ",
  authDomain: "i-was-here-17f75.firebaseapp.com",
  projectId: "i-was-here-17f75",
  storageBucket: "i-was-here-17f75.appspot.com",
  messagingSenderId: "92654630126",
  appId: "1:92654630126:web:d97e345626232d7b65efff",
};

firebase.initializeApp(firebaseConfig);

const storage = getStorage();

export { storage, firebase as default };
