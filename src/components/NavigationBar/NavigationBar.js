import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import { Container, Col, Navbar, Nav } from 'react-bootstrap';
import {Button} from "react-bootstrap";

import './styles.css';
import axios from 'axios'

class NavigationBar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <div>

                <header className="navbar App-header" id="nav-container">
                    <div className="col-8" >
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Navbar bg="light" expand="lg">
                                <Link to="/">
                                    <Navbar.Brand className="text-center">Code Pro Connection</Navbar.Brand>
                                </Link>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav  className="mr-auto" >
                                            <Link to="#"  onClick={this.logout}>
                                                <Button className="btn btn-link">Logout</Button> 
                                            </Link>
                                            <Link to="/project-board">
                                                    <Button variant="outline-secondary">Project Board</Button>
                                            </Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>
                            </section>
                        ) : (
                            <Navbar bg="light" expand="lg">
                                <Link to="/">
                                    <Navbar.Brand >Code Pro Connection</Navbar.Brand>
                                </Link>
                                 
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav  className="mr-auto" >
                                        <Link to="/"
                                            ><Button variant="outline-primary">Home</Button>
                                        </Link>
                                        <Link to="/login">
                                                <Button variant="outline-secondary">Login</Button>
                                        </Link>
                                        <Link to="/signup">
                                            <Button variant="outline-secondary">Sign Up</Button>
                                        </Link>
                                    </Nav>
                                </Navbar.Collapse>
                        </Navbar>
                            )}
                            
                    </div>
                </header>
                

            </div>

        );

    }
}

export default NavigationBar;