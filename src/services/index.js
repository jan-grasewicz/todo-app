import db from "../firebaseSetup";

export const getTasksPromise = () =>
db.collection("tasks").get().then(querySnapshots=>{querySnapshots.forEach(
doc=>{const task={
  id: doc.id,
  title: doc.data().title,
  status: doc.data().status,
  timestamp: doc.data().timestamp.seconds
}
console.log(task)}
)})


// {if(doc&&doc.exist){return doc.data()}}