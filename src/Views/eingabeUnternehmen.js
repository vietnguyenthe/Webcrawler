import React, {Component} from "react"
import Footer from "./footer";
import axios from "axios";




export default class eingabeUnternehmen extends Component {
    constructor(props){
        super(props)
        this.state = {
            firmennamen: '',
            firmenadresse: '',
            plz: '',
            ort: '',
            kontaktperson:'',
            betreff:'',
            emailAdresse:'',
            nachricht:''
        };

        this.mySubmitHandler = this.mySubmitHandler.bind(this)
        this.myChangeHandler = this.myChangeHandler.bind(this)
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:8080//kontaktUnternehmene', this.state)
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
        const {firmennamen, firmenadresse, plz,ort, kontaktperson, emailAdresse, betreff, nachricht} = this.state
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
                                <input type="text" className="form-control" name="firmennamen" value={this.props.firmennamen}
                                       onChange={this.myChangeHandler}/>
                        </div>
                            <div className="form-group col-lg-6 col-sm-12 ">
                                <label htmlFor="text">Adresse</label>
                                <input type="text" className="form-control" name="firmenadresse" value={this.props.firmenadresse}
                                       onChange={this.myChangeHandler}/>
                            </div>
                        </div>
                        <div className="form-group col-lg-6 col-sm-12">
                            <label for="email">PLZ</label>
                            <input type="text" className="form-control" name="plz" value={this.props.plz}
                                   onChange={this.myChangeHandler}/>
                        </div>
                        <div className="form-group col-lg-6 col-sm-12">
                            <label for="email">Ort</label>
                            <input type="text" className="form-control" name="ort" value={this.props.ort}
                                   onChange={this.myChangeHandler}/>
                        </div>
                        <div className="form-group col-lg-6 col-sm-12">
                            <label for="email">Kontaktperson</label>
                            <input type="text" className="form-control" name="kontaktperson" value={this.props.kontaktperson}
                                   onChange={this.myChangeHandler}/>
                        </div>
                        <div className="form-group col-lg-6 col-sm-12">
                            <label for="email">Betreff</label>
                            <input type="text" className="form-control" name="betreff" value={this.props.betreff}
                                   onChange={this.myChangeHandler}/>
                        </div>

                        <div className="form-group col-lg-6 col-sm-12">
                            <label for="email">Email</label>
                            <input type="text" className="form-control" name="emailAdresse" value={this.props.email}
                                   onChange={this.myChangeHandler}/>
                        </div>
                        <div className="form-group col-lg-6 col-sm-12">
                            <label for="pwd">Nachricht</label>
                            <textarea className="form-control" name="textNachricht" value={this.props.nachricht}
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
