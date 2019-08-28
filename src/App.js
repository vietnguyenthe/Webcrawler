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
import gasbus1 from "./gasbus1.jpg"
import Image from "react-bootstrap/Image";
import kazim from "./pictures/kazim-foto.jpg";
import Container from "react-bootstrap/Container";


export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="/">Home</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link><NavLink to="/kunden">Für Kunden</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/unternehmen">Für Unternehmen</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/ueberUns">Über uns</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/eingabeUnternehmen">Kontakt</NavLink></Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>

               <div className="containerBild">
                    <Image style={{width: "100%"}} className="rounded mx-auto d-block"
                           src={gasbus1}/>
                           <div className="textBlock">
                               <p>Willkommen bei fluessiggas-vergleich.de</p>
                           </div>
               </div>
                    <br/>

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
