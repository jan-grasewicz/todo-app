import React, { Component } from "react";
import db from "../firebaseSetup";

export const TasksContext = React.createContext();
const { Provider, Consumer } = TasksContext;

export default class TasksContextProvider extends Component {
  state = {
    tasks: [],
    getTasksRealtime: () =>
      db.collection("tasks").onSnapshot(querySnapshot => {
        let tasks = [];
        querySnapshot.forEach(doc => tasks.push({ id: doc.id, ...doc.data() }));
        this.setState({ tasks });
      }),

    getTasksToDo: () => this.state.tasks.filter(task => task.status === "todo"),
    getTasksInProgress: () =>
      this.state.tasks.filter(task => task.status === "inprogress"),
    getTasksDone: () => this.state.tasks.filter(task => task.status === "done")

    // addTask: taskName =>
    //   this.setState({
    //     tasks: this.state.tasks.concat({
    //       id: Date.now(),
    //       name: taskName,
    //       status: "todo",
    //       parent: "tasks"
    //     })
    //   })
  };

  componentDidMount() {
    this.state.getTasksRealtime();
  }

  componentWillUnmount() {}

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withTasks = Component => props => (
  <Consumer>{value => <Component {...props} tasksContext={value} />}</Consumer>
);
