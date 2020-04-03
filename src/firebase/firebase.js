import * as firebase from "firebase";
/*
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN, 
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId:process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId:process.env.FIREBASE_APPID,
  measurementId:process.env.FIREBASE_MEASUREMENT_ID
};
*/

const firebaseConfig = {
  apiKey: "AIzaSyB1MtrFmJ5jRLf0KCGTcTS5WefbjRB-2ts",
  authDomain: "react-gamer.firebaseapp.com",
  databaseURL: "https://react-gamer.firebaseio.com",
  projectId: "react-gamer",
  storageBucket: "react-gamer.appspot.com",
  messagingSenderId: "1011339585772",
  appId: "1:1011339585772:web:f17a7f24ddc33b04e35dc9",
  measurementId: "G-45LZ2BRVQ1"
};

firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider };