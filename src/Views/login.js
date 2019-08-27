import React, {Component} from "react";
import divWithClassName from "react-bootstrap/es/utils/divWithClassName";
import axios from "axios";
import Footer from "./footer";

export default class Login extends Component {

    constructor(props){
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
                if(response.data=="erfolgreich"){
                    this.props.history.push({
                        pathname: '/preiseingabe',
                    })
                }


            })
            .catch(error => {
                console.log(error)
            })

    }

    myChangeHandler = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    render() {
        const {loginName, loginPasswort} = this.state
        return (
            <div>
                <div className="container d-flex text-center offset-4">
                    <form className="text-center" method="post" id="einlogen">
                        <h3> Bitte Anmelden</h3>
                        <input type="text" className="form-control mt-1" name="loginName" placeholder="Benutzername" value={this.props.loginName} onChange={this.myChangeHandler}/>
                        <input type="text" className="form-control mt-1" name="loginPasswort" placeholder="passwort" value={this.props.loginPasswort} onChange={this.myChangeHandler}/>
                        <button target="einlogen" type="submit" className="btn btn-primary mt-2 mr-1" placeholder="Name" onClick={this.mySubmitHandler}>Einloggen </button>
                    </form>
                </div>
            </div>

        )
    }
}
