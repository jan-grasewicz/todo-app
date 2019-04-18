import db from "../firebaseSetup";

export const getTasksPromise = () =>
  db
    .collection("tasks")
    .get()
    .then(querySnapshot => {
      let tasks = [];
      querySnapshot.forEach(
        doc => doc.exists && tasks.push({ id: doc.id, ...doc.data() })
      );
      return tasks;
    })
    .catch(error => console.log("Error getting document:", error));

export const getTasksPromiseByStatus = (status = "") =>

      db
    .collection("tasks")
    .where("status", "==", status)
    .get()
    .then(querySnapshot => {
      let tasks = [];
      querySnapshot.forEach(doc => tasks.push({ id: doc.id, ...doc.data() }));
      return tasks;
    }).then(data=>data)




    // db
    // .collection("tasks")
    // .where("status", "==", status)
    // .onSnapshot(querySnapshot => {
    //   let tasks = [];
    //   querySnapshot.forEach(doc => tasks.push({ id: doc.id, ...doc.data() }));
    //   return tasks;
    // })






export const getInprogressTasksRealtime = () =>
  db
    .collection("tasks")
    .where("status", "==", "inprogress")
    .onSnapshot(querySnapshot => {
      let tasks = [];
      querySnapshot.forEach(doc => tasks.push({ id: doc.id, ...doc.data() }));
      return tasks;
    });

export const getDoneTasksRealtime = () =>
  db
    .collection("tasks")
    .where("status", "==", "done")
    .onSnapshot(querySnapshot => {
      let tasks = [];
      querySnapshot.forEach(doc => tasks.push({ id: doc.id, ...doc.data() }));
      return console.log(tasks);
    });
