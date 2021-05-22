import React, { Component } from 'react'
import './CoinGame.css'
import Coin from './Coin'

class CoinGame extends Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <section className="CoinGame">
                <h1>Lets flip the coin!</h1>
                <Coin />
                <button>Flip it</button>
                <p>Out of X times, you had X heads and x tails</p>
            </section>
        )
    }
}

export default CoinGame;