import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCwI3JNAUMyNG8FB8mT8jaV1Lu_-Kv-PaM",
  authDomain: "app-clone-35a6c.firebaseapp.com",
  databaseURL: "https://app-clone-35a6c.firebaseio.com",
  projectId: "app-clone-35a6c",
  storageBucket: "app-clone-35a6c.appspot.com",
  messagingSenderId: "747726962962",
  appId: "1:747726962962:web:edafc87ae8802accce33cb",
  measurementId: "G-CK6SVY0R04"
});


  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db, auth};