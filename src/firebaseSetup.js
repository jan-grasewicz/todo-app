import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAiK_YVhYGcs3eLb9ruwkkwcE6a4tAJoMw",
  authDomain: "nested-todos-app.firebaseapp.com",
  databaseURL: "https://nested-todos-app.firebaseio.com",
  projectId: "nested-todos-app",
  storageBucket: "nested-todos-app.appspot.com",
  messagingSenderId: "806198109527"
});

export const forServerTimestamp = firebase.firestore;
export const firestore = firebase.firestore();
export const firestoreCollection = collectionName =>
  firebase.firestore().collection(collectionName);
