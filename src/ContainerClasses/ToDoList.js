import React, { Component } from 'react'
import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {
    render() {
        const todos = [
            {
            todo: 'wash the dishes',
            completed: false,
            user_id: 1
            },
            {
            todo: 'walk the cat',
            completed: true,
            user_id: 1
            },
            {
            todo: 'launder',
            completed: false,
            user_id: 1
            }
        ]
        const mappedItems = todos.map(({ todo, completed }) => <ToDoItem
            key={todo.todo}
            className={completed && 'completed-item'}
            item={todo}
        />)

        return (
            <div className='list-container'>
                {mappedItems}
            </div>
        )
    }
}
