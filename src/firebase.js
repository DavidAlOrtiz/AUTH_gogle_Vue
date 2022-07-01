import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFhaXpzTYb0IrDRnZZ0DXCJeLYz_6LId8",
  authDomain: "fire-1-aa0fa.firebaseapp.com",
  projectId: "fire-1-aa0fa",
  storageBucket: "fire-1-aa0fa.appspot.com",
  messagingSenderId: "378786096457",
  appId: "1:378786096457:web:ae8ff76918db894548e698",
};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}



const db = firebase.firestore();
const auth = firebase.auth();
const marcaDeTiempo = firebase.firestore.FieldValue.serverTimestamp


firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
      unsubscribe();
      resolve(user)
    }, reject);
  })
}

export {
    db, auth, marcaDeTiempo, firebase
}

