import React, { Component } from 'react'
import './Coin.css'

class Coin extends Component {
    
    render() {
        return <img className="Coin" src={`https://tinyurl.com/react-coin-${this.props.face}-jpg`} alt={this.props.face === "heads" ? "Coin Head" : "Coin Tail"} />
    }
}

export default Coin;