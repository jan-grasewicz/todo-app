import firebase from 'firebase';
// import "./firebaseSetup";

const config = {
    apiKey: "AIzaSyAiK_YVhYGcs3eLb9ruwkkwcE6a4tAJoMw",
    authDomain: "nested-todos-app.firebaseapp.com",
    databaseURL: "https://nested-todos-app.firebaseio.com",
    projectId: "nested-todos-app",
    storageBucket: "nested-todos-app.appspot.com",
    messagingSenderId: "806198109527"
  };
  firebase.initializeApp(config);

const docRef =firebase.firestore().collection('tasks')

export const getTasksPromise = () =>
docRef.get().then(doc=>console.log(doc))

// {if(doc&&doc.exist){return doc.data()}}