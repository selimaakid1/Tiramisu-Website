import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cards from './Cards'

class Shop extends Component {
    render() {
        return (
            <div>
                <div className='info-box-text'>
                    <h2 className='info-title'>Commandez votre tiramisù</h2>
                </div>
                <div className= 'info-card-img'>
                    {this.props.items.items.map(
                        item => <Cards item={item} />
                    )}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        items: state.items
    }
}
export default connect(mapStateToProps)(Shop)