import React, {Component} from "react"
import "../styles/preisvergleich.css"
import axios from "axios";


export default class preisvergleichKunden extends Component {

    constructor(props) {
        super(props)

        this.state = {
            anbieter: []
        }
    }

    ladeAnbieter = () => {
        // let anbieterAusDB = []
        axios.post("http://localhost:8080/preis/anfrage", this.state)
            .then(response => {
            console.log(response)
                this.setState({anbieter: response.data})
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


    componentDidMount() {
        this.ladeAnbieter()
/*        axios.post('http://localhost:8080/preis/anfrage', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })*/
    }


    render() {
        const {anbieter} = this.state

        let anbieterDaten = []
        let i = 0  //nicht nötig, verhindern aber Ausgabe einer Warning
        for (let unternehmen of this.state.anbieter) {
            anbieterDaten.push(
                <article className="anbieterDaten">
                    <h1>{unternehmen.name}</h1>
                    <h3>Preis: {unternehmen.preis} </h3>
                    <h3>Adresse:{unternehmen.adresse}  PLZ:{unternehmen.plz}  Ort:{unternehmen.ort}</h3>
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
/*            <div>
                hallo
                {
                    anbieter.length ?
                        anbieter.map(post => <div key={post.name}>{post.plz} {post.preis} {post.ort}</div>):
                        null
                }

            </div>*/
        )
    }
}