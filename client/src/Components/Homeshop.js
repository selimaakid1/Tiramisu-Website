import React, {Component} from 'react'
import { connect } from 'react-redux'
import Cards from '../Components/Cards'
class Homeshop extends Component {
    render() {
        return (
            <div>
                <div className='info-box-text'>
                    <h1 className='info-title'>Commandez votre tiramisù</h1>
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
export default connect(mapStateToProps)(Homeshop)
