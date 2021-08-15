import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyBjQCKlODhVf2oM4xugZWVFo_MyC4D98xA",
    authDomain: "clone-4476a.firebaseapp.com",
    projectId: "clone-4476a",
    storageBucket: "clone-4476a.appspot.com",
    messagingSenderId: "630827399342",
    appId: "1:630827399342:web:36b31cf66fa04537b4d53f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();

  const auth = firebase.auth();

  export {db , auth };