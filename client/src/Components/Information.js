import React, { Component } from 'react'
import Confirmation from './Confirmation';

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            PassWord: '',
            PhoneNumber: '',
            Adress: ''
        }
    }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-sm-12 col-xs-12'>
                            <form className='registerform'>
                                <div>
                                    <h1 className='your-info'>Vos adresses</h1>
                                </div>
                                
                                <label className='test'>Prénom :</label>
                                <input className='media' name='FirstName' type='text' onChange={this.handleChange} placeholder='Prénom' />
                                <label className='test'>Nom :</label>
                                <input className='media' name='LastName' type='text' onChange={this.handleChange} placeholder='Nom' />
                                <label className='test'>Pays</label>
                                <b>Tunisie</b>
                                <label className='test'>Adresse:</label>
                                <input className='media' name='Adresse' type='text' onChange={this.handleChange} placeholder='Adresse' />
                                <label className='test'>Code postal:</label>
                                <input className='media' name='Code' type='text' onChange={this.handleChange} placeholder='Code postal' />
                                <label className='test'>Ville:</label>
                                <input className='media' name='Ville' type='text' onChange={this.handleChange} placeholder='Ville' />
                                <label className='test'>Votre numero de telephone :</label>
                                <input className='media' name='PhoneNumber' type='text' onChange={this.handleChange} placeholder='Telephone' />
                                <label className='test '>Informations supplémentaires:</label>
                                <input className='media info' name='Infos' type='text' onChange={this.handleChange} placeholder='Informations Supplémentaires' />
                            </form>
                        </div>
                    </div>
                    <Confirmation/>
                </div>
            </div>
        )
    }
}



export default Information
