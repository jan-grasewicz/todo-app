import React, { Component } from "react";

export const TasksContext = React.createContext();
const { Provider, Consumer } = TasksContext;

export default class TasksContextProvider extends Component {
  state = {
    tasks: null,
    getTasksFromNewest: () =>
      this.state.tasks ? this.state.tasks.slice().reverse() : [],
    getTasksToDo: () =>
      this.state.getTasksFromNewest().filter(task => task.status === "todo"),
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
    fetch(process.env.PUBLIC_URL + "/tasks.json")
      .then(response => response.json())
      .then(data => this.setState({ tasks: data.tasks }));
  }

  componentWillUnmount() {}

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withTasks = Component => props => (
  <Consumer>{value => <Component {...props} tasksContext={value} />}</Consumer>
);
