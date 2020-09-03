import React from 'react'
import { Card, Button } from 'react-bootstrap'
import {connect } from 'react-redux'
import {addToCart} from '../Actions/CartActions'
import {Link} from 'react-router-dom'

const Cards = ({ item, addToCart }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <p>{item.smallname}</p>
                    <Card.Text>
                        {item.price} DT
                    </Card.Text>
                    <div className='btns' onClick={() => { addToCart(item.id) }}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="goo">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                            <feComposite in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>

                <span class="button--bubble__container">
                    <Link to='/cart' class="button button--bubble" >
                        Ajouter au panier
  </Link>
                    <span class="button--bubble__effect-container">
                        <span class="circle top-left"></span>
                        <span class="circle top-left"></span>
                        <span class="circle top-left"></span>

                        <span class="button effect-button"></span>

                        <span class="circle bottom-right"></span>
                        <span class="circle bottom-right"></span>
                        <span class="circle bottom-right"></span>
                    </span>
                </span>
            </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default connect(null, {addToCart})(Cards)
