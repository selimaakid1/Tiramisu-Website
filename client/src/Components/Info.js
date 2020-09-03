import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'


function Info() {
    return (
        <div className='info-box'>
            <div className='logo-side'>
                <div>
                    <img src='/Dolce3.png' width='200px' className='info-logo' />
                </div>
                <div>
                    <h1 className='logo-title'>Tiramisù</h1>
                    <p className='logo-text'>Dessert au Mascarpone, génoise et café</p>
                    <p className='logo-text'>Dessert with Mascarpone, sponge cake and coffee sauce</p>
                </div>
                <div>
                    <hr className='line'/>
                </div>
                <div>
                    <img src='/bandiera-cerchio-0.png' width='60px' className='flag' />
                </div>
            </div>
            <div className='info-text-box'>

                <div className='text-side'>
                    <h1 className='info-title'>Commandez votre tiramisù et reservez votre livraison à domicile!</h1>
                    <h5 className='info-small-title'>Comment ça marche?</h5>
                    <h3 className='info-text'>COMMANDEZ maintenant et payez ci-dessous tous les pots de tiramisù que vous souhaitez.</h3>
                    <h3 className='info-text'>SÉLECTIONNEZ le jour où vous souhaitez recevoir le tiramisu.</h3>
                    <h3 className='info-text'>ATTENDRE la livraison pour le jour que vous avez sélectionné.</h3>
                    <h3 className='info-text'>GOÛTEZ votre tiramisu dans le confort de votre maison.</h3>
                    <Link to='/shop'><Button /></Link>
                </div>
                <div className='info-img'>
                    <img src='/tiramisu-info.jpg' className='big-img' />
                </div>

            </div>

        </div>
    )
}

export default Info
