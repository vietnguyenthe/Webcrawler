import React, {Component} from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import gastank from "../pictures/gastank.png";
import "../styles/App.css";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import Container from "react-bootstrap/Container";

export default class kunden extends Component {

    constructor(props) {
        super(props);
        console.log('props', props)

        this.state = {
            behaelter: "",
            plz: "",
            anbieter: [],
            intervalId: 0
        };
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({intervalId: intervalId});
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
                if(response.data == ""){
                    alert("Keine Preise für diese Postleitzahl vorhanden")
                }
            })

            .catch(error => {
                console.log(error)
            })
        // this.props.history.push("/preisvergleichKunden")
        // window.location.href = "http://localhost:3000/preisvergeichKunden";
        // return <Redirect to={"/preisvergleichKunden"}/>
    }

    ladeAnbieter = () => {
        // let anbieterAusDB = []
        axios.post("http://localhost:8080/preis/anfrage", this.state)
            .then(response => {
                console.log(response)
                this.setState({anbieter: response.data})
                this.scrollToTop()
            })
            /*         .then(payload => {
                         payload.map(firma => {
                             let unternehmen = {
                                 name: payload.liste.name,
                                 adresse: payload.liste.adresse,
                                 plz: payload.liste.plz,
                             }
                             anbieterAusDB.push(unternehmen)
                             return unternehmen //nicht nötig, verhindern aber Ausgabe einer Warning
                         })
                         this.setState({anbieter: anbieterAusDB})
                     })*/
            .catch(console.log)
    }

    render() {
        const {behaelter, plz} = this.state

        const {anbieter} = this.state

        let anbieterDaten = []
        let i = 0  //nicht nötig, verhindern aber Ausgabe einer Warning
        for (let unternehmen of this.state.anbieter) {
            anbieterDaten.push(
                <article className="anbieterDaten">
                    <h3>{unternehmen.name}</h3>
                    <h5>Adresse: {unternehmen.adresse}, {unternehmen.plz} {unternehmen.ort}</h5>
                    <h5 className="borderText">Preis (in ct/l): {unternehmen.preis} </h5>
                </article>
            )
        }

        return (
            <div>

                <div>
                    <article className="preisvergleich">
                        <h1>Preisvergleich der Anbieter</h1>
                        {anbieterDaten}
                    </article>
                </div>
                <br/><br/>

                <Container>
                <Row>
                    <Col><h3 className="text-center">Wählen Sie die Optionen für den Preisvergleich aus:
                    </h3></Col>
                </Row>
                <Row>
                    <Col/>
                    <Col><h4 className="text-center"><br/>1. Behältergröße</h4></Col>
                    <Col/>
                </Row>

                <div className="selected-behltergrsse">
                    <form onSubmit={this.submitHandler}>
                        <div onChange={this.setBehaelter.bind(this)}>
                            <Row>
                                <Col/>
                                <Col/>
                                <Col>
                                    <label>
                                        <input type="radio" name="behaelter" value="preis2700liter" id="1.2t"/>
                                        <Image src={gastank} height="120" width="120"/>
                                        <br/><h6 className="text-center">1,2 Tonnen</h6>
                                    </label>
                                </Col>
                                <Col>
                                    <label>
                                        <input type="radio" name="behaelter" value="preis4850liter" id="2.1t"/>
                                        <Image src={gastank} height="120" width="120"/>
                                        <br/><h6 className="text-center">2,1 Tonnen</h6>
                                    </label>
                                </Col>
                                <Col>
                                    <label>
                                        <input type="radio" name="behaelter" value="preis6400liter" id="2.9t"/>
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
                                    <input type="number" only-numbers aria-describedby="basic-addon1" name="plz" required="required"
                                           onChange={this.handleChange} value={plz} className="form-control"
                                    />
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
                                            onClick={this.ladeAnbieter}> Anbieter finden</Button>
                                </div>
                            </Col>
                            <Col/>
                        </Row>
                        <Row><br/></Row>
                    </form>
                </div>
                </Container>
            </div>
        )
    }
}


