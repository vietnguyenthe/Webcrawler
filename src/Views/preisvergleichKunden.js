import React, {Component} from "react"
import "../styles/preisvergleich.css"



export default class preisvergleichKunden extends Component {

    constructor(props){
        super(props)

        this.state ={
            anbieter: []
        }
    }

    ladeAnbieter = () => {
        let anbieterAusDB = []
        fetch("chrome-extension://ehafadccdcdedbhcbddihehiodgcddpl/index.html")
            .then(response => response.json())
            .then(payload => {
                payload.map(firma =>  {
                    let unternehmen ={
                        name: firma.name,
                        preis: firma.preis,
                        plz: firma.plz,
                    }
                    anbieterAusDB.push(unternehmen)
                    return unternehmen //nicht nötig, verhindern aber Ausgabe einer Warning
                    })
                    this.setState({anbieter: anbieterAusDB})
            })
            .catch(console.log)

    }

    render() {

        let anbieterDaten=[]
        let i= 0  //nicht nötig, verhindern aber Ausgabe einer Warning
        for(let unternehmen of this.state.anbieter){
            anbieterDaten.push(
                <article className="anbieterDaten">

                </article>
            )
        }

        return (
            <div>
                <article className="preisvergleich">
                    <h1>Preisvergleich der Anbieter</h1>
                    <article className="anbieterDaten">
                        <h2>Anbieter a</h2>
                        <p>Preis</p>
                        <p>PLZ</p>
                    </article>
                </article>
        </div>
        )
    }
}