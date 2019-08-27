import React, {Component} from "react"

export default class eingabeUnternehmen extends Component {
    constructor(props){
        super(props)
        this.state = {
            firmenName: '',
            firmenAdresse: '',
            firmenPlz: '',
            kontaktPerson: '',
            email: '',
            nachricht: 'Text schreiben',
        };
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
    }

    myChangeHandler = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    render() {
        const {firmenName, firmenAdresse, firmenPlz, kontaktPerson, email, nachricht} = this.state
        return (

            <form onSubmit={this.mySubmitHandler}>
                <p>Firmenname</p>
                <input
                    type='text'
                    name={firmenName}
                    onChange={this.myChangeHandler}
                />
                <p>Firmenadresse</p>
                <input
                    type='text'
                    name={firmenAdresse}
                    onChange={this.myChangeHandler}
                />
                <p>Firmen Postleitzahl</p>
                <input
                    type='text'
                    name={firmenPlz}
                    onChange={this.myChangeHandler}
                />
                <p>Kontaktperson</p>
                <input
                    type='text'
                    name={kontaktPerson}
                    onChange={this.myChangeHandler}
                />
                <p>Email-Adresse</p>
                <input
                    type='text'
                    name={email}
                    onChange={this.myChangeHandler}
                />
                <p>Nachricht</p>
                <textarea
                    type='text'
                    name={nachricht}
                    onChange={this.myChangeHandler}
                />
                <br/>
                <input
                    type='submit'
                />
            </form>



        );
    }
}