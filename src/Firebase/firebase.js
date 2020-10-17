import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = firebase.initializeApp({
  //You need to paste here the configurations that firebase gives you when you create the DataBase 
});


  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db, auth};