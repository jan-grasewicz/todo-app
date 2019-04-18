import React, { Component } from "react";
import db from "../firebaseSetup";
// import { getTasksPromiseByStatus} from '../services/index.js'

export const TasksContext = React.createContext();
const { Provider, Consumer } = TasksContext;

export default class TasksContextProvider extends Component {
  state = {
    tasks: null,
    getTasksPromise : () =>
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
      .catch(error => console.log("Error getting document:", error)),
















    getTasksFromNewest: () =>
      this.state.tasks ? this.state.tasks.slice().reverse() : [],

    getTasksToDo: () =>
    this.state.getTasksFromNewest().filter(task => task.status === "todo"),
    // getTasksPromiseByStatus('todo'),
    // {
      // console.log('fuckyou')
      // console.log(Array.isArray(getTasksRealtimeByStatus('todo')))
      // console.log(getTasksRealtimeByStatus('todo'))
      // },
    // .map(data=>console.log(data)),
    getTasksInProgress: () =>
      this.state
        .getTasksFromNewest()
        .filter(task => task.status === "inprogress"),
    getTasksDone: () =>
      this.state.getTasksFromNewest().filter(task => task.status === "done"),
    addTask: taskName =>
      this.setState({
        tasks: this.state.tasks.concat({
          id: Date.now(),
          name: taskName,
          status: "todo",
          parent: "tasks"
        })
      })
  };

  componentDidMount() {
    // this.state.getTasksToDo()
    // getTasksRealtimeByStatus('todo')
  }

  componentWillUnmount() {}

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withTasks = Component => props => (
  <Consumer>{value => <Component {...props} tasksContext={value} />}</Consumer>
);
