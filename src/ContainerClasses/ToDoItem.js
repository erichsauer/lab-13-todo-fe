import React, { Component } from 'react'

export default class ToDoItem extends Component {
    render() {
        const { className, item } = this.props
        return (
            <p
                className={className}
            >
                {item}
            </p>
        )
    }
}
