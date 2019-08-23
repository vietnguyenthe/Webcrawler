import React, {Component} from "react"
import "../styles/preisvergleich.css"
import axios from "axios"


export default class preisvergleichKunden extends Component {

    constructor(props) {
        super(props)

        this.state = {
            anbieter: []
        }
    }

    ladeAnbieter = () => {
        let anbieterAusDB = []
        axios.post("http://localhost:8080/preis/anfrage", this.state)
            .then(response => response.json())
            .then(payload => {
                payload.map(firma => {
                    let unternehmen = {
                        name: firma.name,
                        adresse: firma.adresse,
                        plz: firma.plz,
                        ort: firma.ort,
                        preis: firma.preis,
                    }
                    anbieterAusDB.push(unternehmen)
                    return unternehmen //nicht nötig, verhindern aber Ausgabe einer Warning
                })
                this.setState({anbieter: anbieterAusDB})
            })
            .catch(console.log)

    }

    componentDidMount() {
        this.ladeAnbieter()
    }


    render() {

        let anbieterDaten = []
        let i = 0  //nicht nötig, verhindern aber Ausgabe einer Warning
        for (let unternehmen of this.state.anbieter) {
            anbieterDaten.push(
                <article className="anbieterDaten">
                    <h2>{unternehmen.name}</h2>
                    <h3>Preis: {unternehmen.adresse} PLZ:{unternehmen.plz}</h3>
                    <h3>Preis: {unternehmen.ort} PLZ:{unternehmen.preis}</h3>
                </article>
            )
        }

        return (
            <div>
                <article className="preisvergleich">
                    <h1>Preisvergleich der Anbieter</h1>
                    {anbieterDaten}
                </article>
            </div>
        )
    }
}