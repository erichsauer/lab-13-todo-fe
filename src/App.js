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


export default class App extends Component {
  state = { token: '' }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) =>
                <HomePage {...routerProps}
                />}
            />
            <Route
              path="/login"
              exact
              render={(routerProps) =>
                <LoginPage {...routerProps}
                />}
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) =>
                <SignUpPage {...routerProps}
                />}
            />
            <PrivateRoute
              path="/todos"
              token='1'
              exact
              render={(routerProps) =>
                <ToDoPage
                  {...routerProps}
                />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
