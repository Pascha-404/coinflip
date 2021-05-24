import React, { Component } from 'react'
import './CoinGame.css'
import Coin from './Coin'

class CoinGame extends Component{
    constructor(props){
        super(props)
        this.state = {coinFace: "heads", countFlips: 0, countHeads: 0, countTails: 0}
        this.handleClick = this.handleClick.bind(this)
    }

    flipCoin(e){
        const faces = ["heads", "tail-dime"];
        const randomFace = faces[Math.floor(Math.random() * faces.length)];
        this.setState(curState => ({countFlips: curState.countFlips + 1}))
        if(randomFace === "heads"){
        this.setState(curState => ({countHeads: curState.countHeads + 1}))
        } else {
            this.setState(curState => ({countTails: curState.countTails + 1}))
        };
        this.setState(curState => ({coinFace: randomFace}))
    }

    handleClick(e){
        this.flipCoin()
    }

    render(){
        return (
            <section className="CoinGame">
                <h1>Lets flip the coin!</h1>
                <Coin face={this.state.coinFace}/>
                <button className="CoinGame-btn" onClick={this.handleClick}>Flip it</button>
                <p>Out of {this.state.countFlips} times, you had {this.state.countHeads} heads and {this.state.countTails} tails</p>
            </section>
        )
    }
}

export default CoinGame;