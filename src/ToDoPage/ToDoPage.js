import React, { Component } from 'react'
import ToDoList from '../ContainerClasses/ToDoList'
import { getTodos, postNewTodo, updateTodoAsCompleted } from '../utils/api-utils'

export default class ToDoPage extends Component {
    state = {
        todos: [],
        todo: ''
    } 
    
    componentDidMount = async () => {
        this.setState({
            todos: await getTodos(this.props.token)
        })
    }

    handleClick = async id => {
        await updateTodoAsCompleted(id, this.props.token)
        await this.setState({
            todos: await getTodos(this.props.token)
        })
    }

    handleNewTodo = e => this.setState({ todo: e.target.value })

    handleSubmit = async e => {
        e.preventDefault()
        await postNewTodo(this.state.todo, this.props.token)
        await this.setState({
            todo: '',
            todos: await getTodos(this.props.token)
        })
    }

    render() {
        const { todos, todo } = this.state
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={todo}
                        onChange={this.handleNewTodo}
                    />
                    <button>
                        Add new item
                    </button>
                </form>
                <ToDoList
                    todos={todos}
                    handleClick={this.handleClick}
                />
            </main>
        )
    }
}
