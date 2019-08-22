import React, {Component} from "react"
import { Map, GoogleApiWrapper } from 'google-maps-react';
import "../styles/preisvergleich.css"


export default class preisvergleichKunden extends Component {
    render() {
        return (
            <div>
            Preisvergleich
                <Map
                    google={this.props.google}
                    zoom={8}
                    initialCenter={{ lat: 47.444, lng: -122.176}}
                />
        </div>
        )
    }
}