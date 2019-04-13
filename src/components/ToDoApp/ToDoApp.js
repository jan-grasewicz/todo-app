import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm'
import TaskListItem from './TaskListItem'

import './index.css'
import data from './tasks.json'

class ToDoApp extends Component {
    render() {
        return (
            <div>
                <AddTaskForm />
                <ul>
                    {data.tasks.map(task =>
                        <TaskListItem task={task} />
                    )
                    }
                </ul>
            </div>
        )
    }
}
export default ToDoApp