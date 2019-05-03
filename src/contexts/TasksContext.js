import React, { Component } from "react";
import { forServerTimestamp, firestoreCollection } from "../firebaseSetup";
import { AuthContext } from "./AuthContext";

export const TasksContext = React.createContext();
const { Provider, Consumer } = TasksContext;

export default class TasksContextProvider extends Component {
  state = {
    tasks: [],
    userId: null,
    tasksCollection: "tasks",
    getTasksRealtime: () =>
      firestoreCollection(this.state.tasksCollection)
        .orderBy("timestamp.statusChange", "desc")
        .onSnapshot(
          querySnapshot => {
            let tasks = [];
            querySnapshot.forEach(doc =>
              tasks.push({ id: doc.id, ...doc.data() })
            );
            this.setState({ tasks });
          },
          error => console.error("Fetch tasks error:", error)
        ),
    getTasksToDo: () => this.state.tasks.filter(task => task.status === "todo"),
    getTasksInProgress: () =>
      this.state.tasks.filter(task => task.status === "inprogress"),
    getTasksDone: () => this.state.tasks.filter(task => task.status === "done"),

    addTask: taskTitle =>
      firestoreCollection(this.state.tasksCollection).add({
        title: taskTitle,
        status: "todo",
        timestamp: {
          created: new Date(),
          statusChange: new Date(),
          server: forServerTimestamp.FieldValue.serverTimestamp()
        }
      }),
    changeTaskStatus: (id, status) => {
      switch (status) {
        case "todo":
          return firestoreCollection(this.state.tasksCollection)
            .doc(id)
            .update({
              status: "inprogress",
              "timestamp.statusChange": new Date()
            })
            .catch(error => console.error("Status change error: ", error));
        case "inprogress":
          return firestoreCollection(this.state.tasksCollection)
            .doc(id)
            .update({ status: "done", "timestamp.statusChange": new Date() })
            .catch(error => console.error("Status change error: ", error));
        case "done":
          return firestoreCollection(this.state.tasksCollection)
            .doc(id)
            .delete()
            .catch(error => console.error("Delete task error: ", error));
        default:
          return console.error("unexpected status");
      }
    }
  };

  componentDidMount() {
    this.unsubscribe = (this.state.getTasksRealtime(),
    this.context.fetchSignedUserData(user =>
      this.setState({ userId: user.uid })
    ));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    // console.log(this.state.userId);
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
TasksContextProvider.contextType = AuthContext;

export const withTasks = Component => props => (
  <Consumer>{value => <Component {...props} tasksContext={value} />}</Consumer>
);
