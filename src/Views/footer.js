import React, {Component} from "react";

export default class Footer extends Component {
    render() {
        return (
            <div className="bg-light pt-2 pb-2 ">
            <div className="mt-5 container">
                <div class="row">
                    <div class="col-sm-4 col-md-4  col-lg-4">
                        <p>BeispielHotel GmbH<br/>Abenteuerstraße 16<br/>12345 Musterhausen</p>
                    </div>
                    <div class="col-sm-4 col-md-4  col-lg-4">
                        <p>beispiel@hotel.de<br/>Tel: 01234/56789<br/>Fax: 01234/56789</p>
                    </div>
                    <div class="col-sm-4 col-md-4  col-lg-4">
                        <p>Deutsche Bank<br/>IBAN: DE1234 5678 9123 3456 78</p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
