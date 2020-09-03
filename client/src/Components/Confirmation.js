import React, { Component } from 'react'
import { connect } from 'react-redux'

class Confirmation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h5>Votre ordre:</h5>
                <div>
                    {this.props.items.map(item =>
                        <div>
                            <div className='row'>
                                <div className='col'>
                                    <h5>{item.name}</h5>
                                </div>
                                <div className='col'>
                                    <p>{item.price} Dt</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <h5>Livraison:</h5>
                                </div>
                                <div className='col'>
                                    <h5>+(7Dt)</h5>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <h5>Total:</h5>
                                </div>
                                <div className='col'>
                                    <h5> {this.props.total + 7} Dt</h5>
                                </div>
                            </div></div>)}
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
                    <a href="#campaign" class="button button--bubble">
                        Payer à la livraison
  </a>
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
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        items: state.items.addedItems,
        total: state.items.total
    }
}
export default connect(mapStateToProps)(Confirmation)
