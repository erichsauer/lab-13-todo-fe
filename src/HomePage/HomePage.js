import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        const { token } = this.props
        return (
            <main>
                { !token
                    ? <>
                    <img
                        src='dodo-pizzabird.jpg'
                        alt="dodo illustration"
                        className='main-image'
                    />
                        <div>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/signup">Sign Up!</NavLink>
                        </div>
                    </>
                    : <NavLink to="/todos">Your To-do List</NavLink>
                }
            </main>
        )
    }
}
