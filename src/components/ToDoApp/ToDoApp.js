import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm'
import TaskListItem from './TaskListItem'

import './index.css'

class ToDoApp extends Component{
    render(){
        return(
            <div>
                <AddTaskForm />
                <ul>
                    <TaskListItem />
                </ul>
            </div>
        )
    }
}
export default ToDoApp