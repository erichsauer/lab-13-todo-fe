import React, { Component } from 'react'
import Form from '../ContainerClasses/Form'
import { request } from 'superagent'

export default class LoginPage extends Component {
    state = {
        userName: '',
        password: ''
    }

    handleSubmit = async e => {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <Form
                    onSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}
