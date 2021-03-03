import React, { Component } from 'react'
import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {
    render() {
        const { todos, handleClick } = this.props
        const mappedItems = todos.length
            && todos.map(({ todo, completed, id }) => <ToDoItem
                key={`${todo}-${id}`}
                className={completed ? 'completed-item' : ''}
                todo={todo}
                handleClick={handleClick}
                id={id}
            />)
        const welcomeMessage = 'Nothing To Dodo Yet'
        console.log(todos, mappedItems);
        return (
            <div
                className='list-container'
            >
                {mappedItems.length
                    ? mappedItems
                    : welcomeMessage}
            </div>
        )
    }
}
