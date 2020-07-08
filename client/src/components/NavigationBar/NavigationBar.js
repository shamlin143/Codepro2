import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import { Container, Col, Navbar, Nav } from 'react-bootstrap';
import {Button} from "react-bootstrap";
import './styles.css';
import axios from 'axios'

class NavigationBar extends Component {
    constructor(props) {
        super(props)
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
            
            <Container className="text-center">
               <Col className="text-center" > 
                <header className="navbar App-header" id="nav-container">
                    <div className="col-8" >
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Navbar bg="light" expand="lg">

                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav  className="mr-auto" >
                                            <Link to="/project-board">
                                                <Button variant="outline-secondary">Project Board</Button>
                                            </Link>
                                            <Link to="#"  onClick={this.logout}>
                                                <Button variant="outline-danger" >Logout</Button> 
                                            </Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>
                            </section>
                        ) : (
                            <Navbar bg="light" expand="lg">                                 
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
                
                </Col>
            </Container>

        );

    }
}

export default NavigationBar;