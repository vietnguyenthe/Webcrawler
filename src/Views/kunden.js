import React, {Component} from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import gastank from "../pictures/gastank.png";
import "../styles/kunden.css";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import axios from 'axios';

export default class kunden extends Component {

    constructor(props) {
        super(props);

        this.state = {
            behaelter: "",
            plz: "",
        };
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    setBehaelter(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8080/preis/anfrage', this.state)
            .then(response => {
                console.log(response)
                })

            .then(response => {

            })
            .catch(error => {
                console.log(error)
            })
        // this.props.history.push("/preisvergleichKunden")
        // window.location.href = "http://localhost:3000/preisvergeichKunden";
        // return <Redirect to={"/preisvergleichKunden"}/>
    }


    render() {
        const {behaelter, plz} = this.state
        return (
            <div>
                <Row>
                    <Col><h3 className="text-center">Wählen Sie die Optionen für den Preisvergleich aus:
                    </h3></Col>
                </Row>
                <Row>
                    <Col/>
                    <Col><h4 className="text-center"><br/>1. Behältergröße</h4></Col>
                    <Col/>
                </Row>

                <div className="selected-behltergrsse" >
                    <form onSubmit={this.submitHandler}>
                        <div onChange={this.setBehaelter.bind(this)}>
                    <Row>
                        <Col/>
                        <Col/>
                        <Col>
                            <label>
                                <input type="radio" name="behaelter" value="preis2700liter" id="1.2t" />
                                <Image src={gastank} height="120" width="120"/>
                                <br/><h6 className="text-center">1,2 Tonnen</h6>
                            </label>
                        </Col>
                        <Col>
                            <label>
                                <input type="radio" name="behaelter" value="preis4850liter" id="2.1t" />
                                <Image src={gastank} height="120" width="120"/>
                                <br/><h6 className="text-center">2,1 Tonnen</h6>
                            </label>
                        </Col>
                        <Col>
                            <label>
                                <input type="radio" name="behaelter" value="preis6400liter" id="2.9t" />
                                <Image src={gastank} height="120" width="120"/>
                                <br/><h6 className="text-center">2,9 Tonnen</h6>
                            </label>
                        </Col>
                        <Col/>
                        <Col/>
                    </Row>
                        </div>
                    <Row>
                        <Col/>
                        <Col><h4 className="text-center"><br/>2. Postleitzahl</h4></Col>
                        <Col/>
                    </Row>
                    <Row>
                        <Col/>
                        <Col>
                            <br/>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">PLZ</InputGroup.Text>
                                </InputGroup.Prepend>
                                    <input type="text" aria-describedby="basic-addon1" name="plz"
                                           onChange={this.handleChange} value={plz} className="form-control"/>
                            </InputGroup>
                        </Col>
                        <Col/>
                    </Row>
                    <Row>
                        <Col/>
                        <Col><h4 className="text-center"><br/>3. Losschicken</h4></Col>
                        <Col/>
                    </Row>
                    <Row>
                        <Col/>
                        <Col>
                            <br/>
                            <div className="text-center">
                                    <Button type="submit" className="btn btn-primary"
                                            onclick="{/preisvergleichKunden}" > Anbieter finden</Button>
                            </div>
                        </Col>
                        <Col/>
                    </Row>
                    <Row><br/></Row>
                    </form>
                </div>


            </div>
        )
    }
}