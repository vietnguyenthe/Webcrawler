import React, {Component} from "react";
import Footer from "./footer";
import axios from "axios";
import Card from "react-bootstrap/Card";


export default class Preiseingabe extends Component{
    constructor(props){
        super(props)
        this.state = {
            preis2700Liter: '',
            preis4850Liter: '',
            preis6400Liter: '',
            postleitzahl: '',
            kennwort:'',
        };

        this.mySubmitHandler = this.mySubmitHandler.bind(this)
        this.myChangeHandler = this.myChangeHandler.bind(this)
    }

    mySubmitHandler = (event) => {
        //event.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:8080/preiseingabe', this.state)
            .then(response => {
                console.log(response)
                if(response.data=="erfolgreich"){
                    alert("Daten wurden erfolgreich in die Datenbank übertragen.")
                } else if(response.data == "fehlgeschlagen"){
                    alert("Fehlgeschlagen! Daten wurden leider NICHT übertragen.")
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
        const {preis2700Liter, preis4850Liter, preis6400Liter, postleitzahl,kennwort} = this.state
        return (
            <div>
                <Card className="card-central">
                    <Card.Header className="card-header-central"><h3>Preiseingabe</h3></Card.Header>
                    <Card.Body>
                        <Card.Title>Trage die Preise für die jeweilige PLZ ein:</Card.Title>
                        <Card.Text className="card-text-central">
                        <form required="required">
                            <div className="form-group col-lg-6 col-sm-12">
                                <label htmlFor="text">Preis (ct/l) für 2700 Liter</label>
                                <input type="number" value={this.props.preis2700Liter} className="form-control"
                                       name="preis2700Liter" onChange={this.myChangeHandler} required="required"/>
                            </div>
                            <div className="form-group col-lg-6 col-sm-12">
                                <label htmlFor="text">Preis (ct/l) für 4800 Liter</label>
                                <input type="number" value={this.props.preis4850Liter} className="form-control"
                                       name="preis4850Liter" onChange={this.myChangeHandler} required="required"/>
                            </div>
                            <div class="form-group col-lg-6 col-sm-12">
                                <label for="text">Preis (ct/l) für 6400 Liter</label>
                                <input type="number" value={this.props.preis6400Liter}  className="form-control"
                                       name="preis6400Liter" onChange={this.myChangeHandler} required/>
                            </div>
                            <div className="form-group col-lg-6 col-sm-12">
                                <label for="text">Postleitzahl</label>
                                <input type="number" value={this.props.postleitzahl}  className="form-control"
                                       name="postleitzahl" onChange={this.myChangeHandler} required="required"/>
                            </div>
                            {/*<div className="form-group col-lg-6 col-sm-12">
                        <label for="text">Kennwort</label>
                        <input type="password" value={this.props.kennwort} className="form-control"
                               name="kennwort" onChange={this.myChangeHandler}/>
                    </div>
                    */}
                            <div className="form-group col-lg-6 col-sm-12">
                                <button type="submit" className="btn btn-primary" onClick={this.mySubmitHandler}>Daten
                                    aktualisieren
                                </button>
                            </div>
                        </form>
                        </Card.Text>

                    </Card.Body>
                </Card>
<br/>
            </div>
        );
    }
}
