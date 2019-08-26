import React, {Component} from "react"
import Footer from "./footer";
import axios from "axios";




export default class eingabeUnternehmen extends Component {
    constructor(props){
        super(props)
        this.state = {
            firmenName: '',
            firmenAdresse: '',
            firmenPlz: '',
            firmenOrt: '',
            kontaktPerson:'',
            betreff:'',
            email:'',
            textNachricht:''
        };

        this.mySubmitHandler = this.mySubmitHandler.bind(this)
        this.myChangeHandler = this.myChangeHandler.bind(this)
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:8080/preis/anfrage', this.state)
            .then(response => {
                console.log(response)
            })

            .catch(error => {
                console.log(error)
            })

    }

    myChangeHandler = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }
    render() {
        const {firmenName, firmenAdresse, firmenPlz,firmenOrt, kontaktPerson, email, betreff, textNachricht} = this.state
        return (

            <div>
                <div className="container">
                    <h5 className="text-center"> Kontaktformular</h5>
                    <h6 className="text-center  ">Sie möchten mit uns zusammenarbeiten? Dann schreiben Sie </h6>
                    <h6 className="text-center  ">uns eine Nachricht</h6>
                    <form>
                        <div>
                            <div className="form-group  col-lg-6 col-sm-12">
                                <label for="text">Firmenname</label>
                                <input type="text" className="form-control" name="firmenName" value={this.props.firmenName}
                                       onChange={this.myChangeHandler}/>
                        </div>
                            <div className="form-group col-lg-6 col-sm-12 ">
                                <label htmlFor="text">Adresse</label>
                                <input type="text" className="form-control" name="firmenAdresse" value={this.props.firmenAdresse}
                                       onChange={this.myChangeHandler}/>
                            </div>
                        </div>
                        <div className="form-group col-lg-6 col-sm-12">
                            <label for="email">PLZ</label>
                            <input type="text" className="form-control" name="firmenPlz" value={this.props.firmenPlz}
                                   onChange={this.myChangeHandler}/>
                        </div>
                        <div className="form-group col-lg-6 col-sm-12">
                            <label for="email">Ort</label>
                            <input type="text" className="form-control" name="firmenOrt" value={this.props.firmenOrt}
                                   onChange={this.myChangeHandler}/>
                        </div>
                        <div className="form-group col-lg-6 col-sm-12">
                            <label for="email">Kontaktperson</label>
                            <input type="text" className="form-control" name="kontaktPerson" value={this.props.kontaktPerson}
                                   onChange={this.myChangeHandler}/>
                        </div>
                        <div className="form-group col-lg-6 col-sm-12">
                            <label for="email">Betreff</label>
                            <input type="text" className="form-control" name="betreff" value={this.props.betreff}
                                   onChange={this.myChangeHandler}/>
                        </div>

                        <div className="form-group col-lg-6 col-sm-12">
                            <label for="email">Email</label>
                            <input type="text" className="form-control" name="email" value={this.props.email}
                                   onChange={this.myChangeHandler}/>
                        </div>
                        <div className="form-group col-lg-6 col-sm-12">
                            <label for="pwd">Nachricht</label>
                            <textarea className="form-control" name="textNachricht" value={this.props.textNachricht}
                                   onChange={this.myChangeHandler} rows="6"></textarea>
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
