import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdUr5gN2S_plR4Ezy4EbXt5VU22R-xRzM",
  authDomain: "career-app-11a7f.firebaseapp.com",
  projectId: "career-app-11a7f",
  storageBucket: "career-app-11a7f.appspot.com",
  messagingSenderId: "923159367105",
  appId: "1:923159367105:web:51a860f5781642894bb340",
  measurementId: "G-GXG599PYW0"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()

  export {auth,db}