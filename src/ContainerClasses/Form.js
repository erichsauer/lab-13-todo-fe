import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        const {
            handleEmail,
            handlePassword,
            handleSubmit,
            email,
            password
        } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    placeholder='email'
                    onChange={handleEmail}
                    value={email}
                />
                <input
                    type='password'
                    placeholder='password'
                    onChange={handlePassword}
                    value={password}
                />
                <button>
                    Login
                </button>
            </form>
        )
    }
}
