import React, { Component } from 'react'
import Form from '../ContainerClasses/Form'
import { logUserIn } from '../utils/api-utils'


export default class LoginPage extends Component {
    state = {
        userName: '',
        password: ''
    }

    handleEmail = e => this.setState({ email: e.target.value })
    
    handlePassword = e => this.setState({ password: e.target.value })

    handleSubmit = async e => {
        e.preventDefault()
        const user = await logUserIn(this.state.email, this.state.password)
        this.props.handleUserChange(user)
        this.props.history.push('/todos')
    }

    render() {
        const { email, password } = this.state
        return (
            <main>
                <Form
                    email={email}
                    password={password}
                    handleEmail={this.handleEmail}
                    handlePassword={this.handlePassword}
                    handleSubmit={this.handleSubmit}
                />
            </main>
        )
    }
}
