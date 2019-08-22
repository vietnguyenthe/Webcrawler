import React, {Component} from "react"
import { Map, GoogleApiWrapper } from 'google-maps-react';
import "../styles/preisvergleich.css"
import axios from'axios'


export default class preisvergleichKunden extends Component {
    constructor(props){
        super(props)

        this.state = {
            anbieterListe: []
        }
    }

    // get Json Objekte voneiner Api und steck die in die state!
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({anbieterListe : response.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {anbieterListe } = this.state
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={8}
                    initialCenter={{ lat: 47.444, lng: -122.176}}
                />

                <br/>
            Preisvergleich

                // gezogene und in die Variable gepackte Liste durch iterieren nach ternärerem Operator
                {
                    anbieterListe.length ?
                        anbieterListe.map(post => <div key={post.id}>{post.title}</div>):
                        null
                }

        </div>
        )
    }
}