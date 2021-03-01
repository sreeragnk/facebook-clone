// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCU4qBID8MhDirgMKfi9NB0isP9cuPcXm0",
    authDomain: "facebook-clone-e2cdb.firebaseapp.com",
    projectId: "facebook-clone-e2cdb",
    storageBucket: "facebook-clone-e2cdb.appspot.com",
    messagingSenderId: "736112801467",
    appId: "1:736112801467:web:d4eaad1c88034245545b9e",
    measurementId: "G-RET1P3KSVV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;