import React, {Component} from "react";
import Footer from "./footer";
import axios from "axios";


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
                <div className="container mt-3 mb-3">
                    <h5 className="text-center"> Preiseingabe</h5>
                    <h6 className="text-center  ">Trage die Preise für die jeweilige PLZ ein</h6>

                <form method="post">
                        <div className="form-group col-lg-6 col-sm-12">
                            <label for="text">Preis für 2700 Liter</label>
                            <input type="number" value={this.props.preis2700Liter} class="form-control" name="preis2700Liter" onChange={this.myChangeHandler}/>
                        </div>
                        <div className="form-group col-lg-6 col-sm-12">
                            <label for="text">Preis für 4800 Liter</label>
                            <input type="number" value={this.props.preis4850Liter}  className="form-control" name="preis4850Liter" onChange={this.myChangeHandler}/>
                    </div>
                    <div class="form-group col-lg-6 col-sm-12">
                        <label for="text">Preis für 6400 Liter</label>
                        <input type="number" value={this.props.preis6400Liter}  className="form-control" name="preis6400Liter" onChange={this.myChangeHandler}/>
                    </div>
                    <div className="form-group col-lg-6 col-sm-12">
                        <label for="text">Postleitzahl</label>
                        <input type="number" value={this.props.postleitzahl}  className="form-control"
                               name="postleitzahl" onChange={this.myChangeHandler}/>
                    </div>
                    <div className="form-group col-lg-6 col-sm-12">
                        <label for="text">Kennwort</label>
                        <input type="password" value={this.props.kennwort} className="form-control"
                               name="kennwort" onChange={this.myChangeHandler}/>
                    </div>
                    <div className="form-group col-lg-6 col-sm-12">
                    <button type="submit" class="btn btn-primary" onClick={this.mySubmitHandler}>Daten aktualisieren</button>
                    </div>
                </form>
             </div>
            </div>
        );
    }
}
