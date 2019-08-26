import React, {Component} from "react"
import Footer from "./footer";




export default class eingabeUnternehmen extends Component {
    constructor(props){
        super(props)
        this.state = {
            firmenName: '',
            firmenAdresse: '',
            firmenPlz: '',
            kontaktPerson: '',
            email: '',
            nachricht: 'Text schreiben',
        };
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
    }

    myChangeHandler = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    render() {
        const {firmenName, firmenAdresse, firmenPlz,firmenOrt, kontaktPerson, email, betreff, nachricht} = this.state
        return (

            <div>
                <div className="container">
                    <h5 className="text-center"> Kontaktformular</h5>
                    <h6 className="text-center  ">Sie möchten mit uns zusammenarbeiten? Dann schreiben Sie </h6>
                    <h6 className="text-center  ">uns eine Nachricht</h6>
                    <form>
                        <div>
                            <div className="form-group  col-lg-6 col-sm-12">
                                <label htmlFor="text">Firmenname</label>
                                <input type="text" className="form-control" id="firmenName"
                                       onChange={this.myChangeHandler}/>
                        </div>
                            <div className="form-group col-lg-6 col-sm-12 ">
                                <label htmlFor="text">Adresse</label>
                                <input type="text" className="form-control" id="firmenAdresse"
                                       onChange={this.myChangeHandler}/>
                            </div>
                        </div>
                        <div className="form-group col-lg-6 col-sm-12">
                            <label htmlFor="email">PLZ</label>
                            <input type="text" className="form-control" id="firmenPlz"
                                   onChange={this.myChangeHandler}/>
                        </div>
                        <div className="form-group col-lg-6 col-sm-12">
                            <label htmlFor="email">Ort</label>
                            <input type="text" className="form-control" id="firmenOrt"
                                   onChange={this.myChangeHandler}/>
                        </div>
                        <div className="form-group col-lg-6 col-sm-12">
                            <label htmlFor="email">Kontaktperson</label>
                            <input type="text" className="form-control" id="kontaktPerson"
                                   onChange={this.myChangeHandler}/>
                        </div>
                        <div className="form-group col-lg-6 col-sm-12">
                            <label htmlFor="email">Betreff</label>
                            <input type="text" className="form-control" id="betreff"
                                   onChange={this.myChangeHandler}/>
                        </div>

                        <div className="form-group col-lg-6 col-sm-12">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="E-Mail"
                                   onChange={this.myChangeHandler}/>
                        </div>
                        <div className="form-group col-lg-6 col-sm-12">
                            <label htmlFor="pwd">Nachricht</label>
                            <textarea className="form-control" id="textNachricht" rows="6"></textarea>
                        </div>
                        <div className="form-group col-lg-6 col-sm-12">
                        <button type="submit" className="btn btn-primary" onClick={this.mySubmitHandler}>
                            Abschicken
                        </button>
                        </div>
                    </form>
                </div>
                <Footer/>
            </div>

        );
    }
}
