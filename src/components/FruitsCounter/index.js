import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {eatMango: 0, eatBanana: 0}

  eatMango = () => {
    this.setState(prevState => {
      console.log(`Previous mango count value is ${prevState.eatMango}`)
      return {eatMango: prevState.eatMango + 1}
    })
  }

  eatBanana = () => {
    this.setState(prevState => {
      console.log(`Previous banana count value is ${prevState.eatBanana}`)
      return {eatBanana: prevState.eatBanana + 1}
    })
  }

  render() {
    const {eatMango, eatBanana} = this.state
    return (
      <div className="fruits-counter-container">
        <div className="fruits-counter">
          <h1 className="count-text">
            Bob ate <span className="count">{eatMango}</span> mangoes
            <span className="count"> {eatBanana}</span> bananas
          </h1>
          <div className="counters-control-container">
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.eatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.eatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
