import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,

  // apiKey: "AIzaSyAxnoj51SroWc9yv0MLJoPXWoNRLYQyGDE",
  // authDomain: "foretagspoolen-4f08a.firebaseapp.com",
  // projectId: "foretagspoolen-4f08a",
  // storageBucket: "foretagspoolen-4f08a.appspot.com",
  // messagingSenderId: "19434385711",
  // appId: "1:19434385711:web:6851cf8dedf15100dd31da",
});

export const db = firebase.firestore();

export default firebase;
