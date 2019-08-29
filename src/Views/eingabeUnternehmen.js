import React, {Component} from "react"
import axios from "axios";
import Card from "react-bootstrap/Card";





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
        //event.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:8080/kontaktUnternehmen', this.state)
            .then(response => {
                console.log(response)
                if(response.data=="erfolgreich"){
                    alert("Ihre Nachricht wurde erfolgreich übermittelt. Wir werden uns zeitnah bei Ihnen melden!")
                } else if(response.data == "leer"){
                    alert("Fehlgeschlagen! Bitte füllen Sie alle Felder aus.")
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
        const {firmennamen, firmenadresse, plz,ort, kontaktperson, emailAdresse, betreff, nachricht} = this.state
        return (
            <div>
            <div className="bg">
                <br/>
                <div className="nicht">
                <Card className="card-central-kontaktformular">
                    <Card.Header><h3>Kontaktformular</h3></Card.Header>
                    <Card.Body>
                        <Card.Title>Sie möchten mit uns zusammenarbeiten?</Card.Title>
                        <Card.Title>Dann schreiben Sie uns eine Nachricht:</Card.Title>
                        <Card.Text>
                            <form>
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="text">Firmenname</label>
                                        <input type="text" className="form-control" name="firmennamen"
                                               value={this.props.firmennamen}
                                               onChange={this.myChangeHandler} required="required"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="text">Adresse</label>
                                        <input type="text" className="form-control" name="firmenadresse"
                                               value={this.props.firmenadresse}
                                               onChange={this.myChangeHandler} required="required"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">PLZ</label>
                                    <input type="text" className="form-control" name="plz" value={this.props.plz}
                                           onChange={this.myChangeHandler} required="required"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Ort</label>
                                    <input type="text" className="form-control" name="ort" value={this.props.ort}
                                           onChange={this.myChangeHandler} required="required"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Kontaktperson</label>
                                    <input type="text" className="form-control" name="kontaktperson"
                                           value={this.props.kontaktperson}
                                           onChange={this.myChangeHandler} required="required"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Betreff</label>
                                    <input type="text" className="form-control" name="betreff"
                                           value={this.props.betreff}
                                           onChange={this.myChangeHandler} required="required"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" className="form-control" name="emailAdresse"
                                           value={this.props.email}
                                           onChange={this.myChangeHandler} required="required"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pwd">Nachricht</label>
                                    <textarea className="form-control" name="nachricht" value={this.props.nachricht}
                                              onChange={this.myChangeHandler} rows="6" required="required"></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary" onClick={this.mySubmitHandler}>
                                        Abschicken
                                    </button>
                                </div>
                            </form>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <br/>
            </div>
            </div>
        );
    }
}
