import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAiK_YVhYGcs3eLb9ruwkkwcE6a4tAJoMw",
  authDomain: "nested-todos-app.firebaseapp.com",
  databaseURL: "https://nested-todos-app.firebaseio.com",
  projectId: "nested-todos-app",
  storageBucket: "nested-todos-app.appspot.com",
  messagingSenderId: "806198109527"
};
firebase.initializeApp(config);
