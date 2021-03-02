import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    Form!
                </form>
            </div>
        )
    }
}
