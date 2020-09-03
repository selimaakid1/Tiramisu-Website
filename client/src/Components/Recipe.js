import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addShipping, substractShipping } from '../Actions/CartActions'
import { Link } from 'react-router-dom'
class Recipe extends Component {
    handleChecked = (e) => {
        if (e.target.checked) {
            this.props.addShipping();
        }
        else {
            this.props.substractShipping();
        }
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="collection">
                        <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                                <span className='shipping-text'>Livraison(+7DT)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} DT</b></li>
                    </div>
                </div>
                <div className='btns'>
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
                        <Link to='/information' class="button button--bubble">
                            Commandez
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
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.items.total
    }
}
export default connect(mapStateToProps, { addShipping, substractShipping })(Recipe)