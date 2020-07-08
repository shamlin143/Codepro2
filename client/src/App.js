import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
// components
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Signup from './pages/SignUp/sign-up'
import LoginForm from './pages/LoginForm/login-form';
import ProjectBoard from './pages/ProjectBoard/project-board';
import Navigationbar from './components/NavigationBar/NavigationBar';
import Home from './pages/Home/home';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Jumbotron />
        <Navigationbar updateUser={this.updateUser} userName={this.state.username} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <h5 className="futureTitle">Your Future Begins Now, {this.state.username}!</h5>
        }
        <Route
          path="/"
          render={() =>
            <Home
              updateUser={this.updateUser}
              userName={this.state.username}
            />}
        />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />
        <Route
          path="/project-board"
          render={() =>
            <ProjectBoard
              updateUser={this.updateUser}
              userName={this.state.username}
            />}
        />


      </div>
    );
  }
}

export default App;
