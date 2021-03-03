import React, { Component } from 'react'

import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';

import './App.css';

import Header from './ContainerClasses/Header'
import HomePage from './HomePage/HomePage'
import LoginPage from './LoginPage/LoginPage'
import SignUpPage from './SignUpPage/SignUpPage'
import ToDoPage from './ToDoPage/ToDoPage'
import PrivateRoute from "./ContainerClasses/PrivateRoute";
import { getTokenFromLocalStorage, setTokenToLocalStorage } from './utils/local-storage-utils';


export default class App extends Component {
  state = {
    token: ''
  }

  componentDidMount = () => {
    this.setState({ token: getTokenFromLocalStorage() })
  }

  handleUserChange = async ({ token }) => {
    await this.setState({ token })
    setTokenToLocalStorage(token)
  }

  resetState = () => {
    this.setState({ token: '' })
    setTokenToLocalStorage('')
  }

  render() {
    const { token } = this.state
    return (
      <div className='App'>
        <Router>
          <Header
            resetState={this.resetState}
            token={token}
          />
          <Switch>
            {/* <main> */}
            <Route
              path="/"
              exact
              render={(routerProps) =>
                <HomePage {...routerProps}
                  token={token}
                />}
            />
            <Route
              path="/login"
              exact
              render={(routerProps) =>
                <LoginPage {...routerProps}
                  handleUserChange={this.handleUserChange}
                />}
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) =>
                <SignUpPage {...routerProps}
                  handleUserChange={this.handleUserChange}
                />}
            />
            <PrivateRoute
              path="/todos"
              token={token}
              exact
              render={(routerProps) =>
                <ToDoPage
                token={token}
                  {...routerProps}
                />}
              />
              {/* </main> */}
          </Switch>
        </Router>
      </div>
    )
  }
}
