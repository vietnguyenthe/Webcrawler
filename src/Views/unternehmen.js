import React, {Component} from "react";
import "../styles/unternehmen.css"
import {Route, HashRouter, Link} from "react-router-dom";
import eingabeUnternehmen from "./eingabeUnternehmen";




















export default class unternehmen extends Component {
    render() {
        return (
         <HashRouter>
            <div>
                 <div className="container">
                     <div className="d-flex justify-content-center h-100">
                         <div className="card">
                             <div className="card-header">
                                 <h3>Anmeldung</h3>
                                 <div className="d-flex justify-content-end social_icon">
                                     <span><i className="fab fa-facebook-square"></i></span>
                                     <span><i className="fab fa-google-plus-square"></i></span>
                                     <span><i className="fab fa-twitter-square"></i></span>
                                 </div>
                             </div>
                             <div className="card-body">
                                 <form>
                                     <div className="input-group form-group">
                                         <div className="input-group-prepend">
                                             <span className="input-group-text"><i className="fas fa-user"></i></span>
                                         </div>
                                         <input type="text" className="form-control" placeholder="Benutzername"/>

                                     </div>
                                     <div className="input-group form-group">
                                         <div className="input-group-prepend">
                                             <span className="input-group-text"><i className="fas fa-key"></i></span>
                                         </div>
                                         <input type="password" className="form-control" placeholder="Passwort"/>
                                     </div>
                                     <div className="row align-items-center remember">
                                         <input type="checkbox"/> <span>Merken</span>
                                     </div>
                                     <div className="form-group">
                                         <input type="submit" value="Login" className="btn float-right login_btn"/>
                                     </div>
                                 </form>
                             </div>
                             <div className="card-footer">
                                 <div className="d-flex justify-content-center links">
                                     Sie haben noch keine Anmeldedaten?
                                     <a><Link to="/eingabeUnternehmen">Anmeldung</Link></a>
                                 </div>
                                 <div className="d-flex justify-content-center">
                                     <a href="#">Passwort vergessen?</a>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                <Route path={"/eingabeUnternehmen"} component={eingabeUnternehmen}/>
         </div>
         </HashRouter>
        )
    }
}
