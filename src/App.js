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
import preiseingabe from "./Views/preiseingabe";
import StickyFooter from 'react-sticky-footer';
import login from "./Views/login"


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
                                <Nav.Link><NavLink className="navlinkcolor" to="/kunden">Für Kunden</NavLink></Nav.Link>
                                <Nav.Link><NavLink className="navlinkcolor" to="/unternehmen">Für Unternehmen</NavLink></Nav.Link>
                                <Nav.Link><NavLink className="navlinkcolor" to="/ueberUns">Über uns</NavLink></Nav.Link>
                                <Nav.Link><NavLink className="navlinkcolor" to="/eingabeUnternehmen">Kontakt</NavLink></Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>

                    <Jumbotron fluid>
                        <h1 className="header">Willkommen bei fluessiggas-vergleich.de</h1>
                    </Jumbotron>


                        <div className="content">
                            <Route exact path={"/"} component={kunden}/>
                            <Route path={"/kunden"} component={kunden}/>
                            <Route path={"/ueberUns"} component={ueberUns}/>
                            <Route path={"/unternehmen"} component={login}/>
                            <Route path={"/preisvergleichKunden"} component={preisvergleichKunden}/>
                            <Route path={"/eingabeUnternehmen"} component={eingabeUnternehmen}/>
                            <Route path={"/preiseingabe"} component={preiseingabe}/>
                        </div>
                    <StickyFooter>
                        <div className="bg-light pt-1 pb-1 ">
                            <div className="mt-3 container">
                                <div className="row">
                                    <div className="col-sm-4 col-md-4  col-lg-4">
                                        <p>fluessiggas-vergleich.de<br/>Abenteuerstraße 16<br/>12345 Musterhausen</p>
                                    </div>
                                    <div className="col-sm-4 col-md-4  col-lg-4">
                                        <p>fluessiggas@vergleich.de<br/>Tel: 01234/56789<br/>Fax: 01234/56789</p>
                                    </div>
                                    <div className="col-sm-4 col-md-4  col-lg-4">
                                        <p>Deutsche Bank<br/>IBAN: DE1234 5678 9123 3456 78</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StickyFooter>
                </div>
            </HashRouter>
    )
    }
    }
