import React, { Component } from "react";
import db, { forServerTimestamp } from "../firebaseSetup";

export const TasksContext = React.createContext();
const { Provider, Consumer } = TasksContext;

export default class TasksContextProvider extends Component {
  state = {
    tasks: [],
    getTasksRealtime: () =>
      db
        .collection("tasks")
        .orderBy("timestamp.user", "desc")
        .onSnapshot(
          querySnapshot => {
            let tasks = [];
            querySnapshot.forEach(doc =>
              tasks.push({ id: doc.id, ...doc.data() })
            );
            this.setState({ tasks });
          },
          error => console.log("error:", error)
        ),
    getTasksToDo: () => this.state.tasks.filter(task => task.status === "todo"),
    getTasksInProgress: () =>
      this.state.tasks.filter(task => task.status === "inprogress"),
    getTasksDone: () => this.state.tasks.filter(task => task.status === "done"),

    addTask: taskTitle =>
      db.collection("tasks").add({
        title: taskTitle,
        status: "todo",
        timestamp: {
          user: new Date(),
          server: forServerTimestamp.FieldValue.serverTimestamp()
        }
      })
  };

  componentDidMount() {
    this.unsubscribe = this.state.getTasksRealtime();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withTasks = Component => props => (
  <Consumer>{value => <Component {...props} tasksContext={value} />}</Consumer>
);
