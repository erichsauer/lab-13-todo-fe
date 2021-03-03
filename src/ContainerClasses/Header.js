import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        const { resetState, token } = this.props
        return (
            <header>
                { token
                    ? <div className='header-container'>
                        <img className='dodo-logo'
                            src='dodo-pizzabird.jpg'
                            alt="dodo logo" />
                        <button onClick={resetState}>
                            Sign Out
                        </button>
                    </div>
                    : <div className='welcome-header'>
                        Welcome To<br />
                        Dodo's To-Dos!
                    </div>
                }
            </header>
        )
    }
}
