import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up!</NavLink>
            </div>
        )
    }
}
