import React, { Component } from 'react'

export default class ToDoItem extends Component {
    render() {
        const { className, todo, handleClick, id } = this.props
        return (
            <p
                className={className}
                onClick={() => handleClick(id)}
            >
                {todo}
            </p>
        )
    }
}
