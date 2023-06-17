import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyCt0RkJkj96Isrb_nyh4MZX1s80M9QbHnQ",
  authDomain: "toddlepro.firebaseapp.com",
  projectId: "toddlepro",
  storageBucket: "toddlepro.appspot.com",
  messagingSenderId: "1066967501014",
  appId: "1:1066967501014:web:0748a21fade498c237e177"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
