import React, {Component} from "react";
import divWithClassName from "react-bootstrap/es/utils/divWithClassName";
import axios from "axios";
import Footer from "./footer";
import {HashRouter, Link} from "react-router-dom";
import eingabeUnternehmen from "./eingabeUnternehmen";

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loginName: '',
            loginPasswort: '',
        };

        this.mySubmitHandler = this.mySubmitHandler.bind(this)
        this.myChangeHandler = this.myChangeHandler.bind(this)
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:8080/login', this.state)
            .then(response => {
                console.log(response)
                if (response.data == "erfolgreich") {
                    this.props.history.push({
                        pathname: '/preiseingabe',
                    })
                }
                if(response.data=="fehlgeschlagen"){
                    alert("Fehlgeschlagen")
                }

                    })
            .catch(error => {
                console.log(error)
            })

    }

    myChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const {loginName, loginPasswort} = this.state
        return (

            <div>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="card">
                            <div className="card-header">
                                <h3>Anmeldung</h3>
                                <div className="d-flex justify-content-end">
                                </div>
                            </div>
                            <div className="card-body">
                                <form className="text-center" method="post" id="einlogen">
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" className="form-control" name="loginName"
                                               placeholder="Benutzername"
                                               value={this.props.loginName} onChange={this.myChangeHandler}/>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="text" className="form-control" name="loginPasswort"
                                               placeholder="Passwort"
                                               value={this.props.loginPasswort} onChange={this.myChangeHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <button target="einlogen" type="submit" className="btn btn-primary mt-2 mr-1"
                                                placeholder="Name" onClick={this.mySubmitHandler}>Einloggen
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center links">
                                    Sie haben noch keine Anmeldedaten?
                                    <a><Link to="/eingabeUnternehmen">Anmeldung</Link></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}
