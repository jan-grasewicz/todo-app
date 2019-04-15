import React, { Component } from "react";
import data from "../components/ToDoApp/tasks.json";

export const TasksContext = React.createContext();
const { Provider, Consumer } = TasksContext;

export default class TasksContextProvider extends Component {
  state = {
    tasks: null,
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
    this.setState({ tasks: data.tasks });
  }

  componentWillUnmount() {}

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withTasks = Component => props => (
  <Consumer>{value => <Component {...props} tasksContext={value} />}</Consumer>
);
