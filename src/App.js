import React, {Component} from "react";
import {Route, HashRouter, NavLink} from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/Button";
import "./styles/App.css";
import kunden from "./Views/kunden";
import unternehmen from "./Views/unternehmen";
import ueberUns from "./Views/ueberUns";
import preisvergleichKunden from "./Views/preisvergleichKunden";
import eingabeUnternehmen from "./Views/eingabeUnternehmen";

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link><NavLink to="/kunden">Für Kunden</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/unternehmen">Für Unternehmen</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/ueberUns">Über uns</NavLink></Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>

                    <Jumbotron fluid>
                        <h1 className="header">Welcome To React-Bootstrap</h1>
                    </Jumbotron>


                        <div className="content">
                            <Route exact path={"/"} component={kunden}/>
                            <Route path={"/kunden"} component={kunden}/>
                            <Route path={"/ueberUns"} component={ueberUns}/>
                            <Route path={"/unternehmen"} component={unternehmen}/>
                            <Route path={"/preisvergleichKunden"} component={preisvergleichKunden}/>
                            <Route path={"/eingabeUnternehmen"} component={eingabeUnternehmen}/>
                        </div>
                </div>
            </HashRouter>
    )
    }
    }
