import React, {Component} from "react";
import divWithClassName from "react-bootstrap/es/utils/divWithClassName";

export default class Login extends Component {
    render() {
        return (
        <div className="container d-flex text-center offset-4 ">
            <div className="">
            <form className="text-center" method="post" id="einlogen">

            <h3> Bitte Anmelden</h3>
            <input type="text" className="form-control mt-1" name="loginName" placeholder="Email"/>
            <input type="text" className="form-control mt-1" name="loginPasswort" placeholder="passwort"/>
            <button target="einlogen" type="submit" className="btn btn-primary mt-2 mr-1" id="login" placeholder="Name">Einloggen </button>
            </form>
            </div>
        </div>
        )
    }
}
