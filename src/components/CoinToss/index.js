// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {sum: 0, heads: 0, tails: 0, coin: 'head'}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const coin = tossResult === 0 ? 'head' : 'tails'
    tossResult === 0
      ? this.setState(prevState => ({heads: prevState.heads + 1}))
      : this.setState(prevState => ({tails: prevState.tails + 1}))
    this.setState(prevState => ({sum: prevState.sum + 1}))
    this.setState({coin: coin})
    console.log(tossResult)
  }

  render() {
    const {sum, heads, tails, coin} = this.state

    return (
      <div className="bgContainer">
        <div className="card">
          <h1 className="mainHeading">Coin Toss Game</h1>
          <p className="text">Heads (or) Tails</p>
          {coin === 'head' ? (
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          ) : (
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}
          <button type="button" className="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="result">
            <p className="resultText">Total: {sum}</p>
            <p className="resultText">Heads: {heads}</p>
            <p className="resultText">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
