import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCIFU5LjFmINSfzC0B5rOMKx_-MBs3i4-s",
    authDomain: "hingeflix-netflix-clone.firebaseapp.com",
    projectId: "hingeflix-netflix-clone",
    storageBucket: "hingeflix-netflix-clone.appspot.com",
    messagingSenderId: "845280879416",
    appId: "1:845280879416:web:2c90853e8a744b18bc17cd"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {auth };
export {db};
export default firebase;