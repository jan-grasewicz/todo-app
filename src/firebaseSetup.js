import firebase from "firebase";
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyAiK_YVhYGcs3eLb9ruwkkwcE6a4tAJoMw",
  authDomain: "nested-todos-app.firebaseapp.com",
  databaseURL: "https://nested-todos-app.firebaseio.com",
  projectId: "nested-todos-app",
  storageBucket: "nested-todos-app.appspot.com",
  messagingSenderId: "806198109527"
};
const firebaseApp=firebase.initializeApp(config);
const firestore = firebaseApp.firestore()
export default firestore