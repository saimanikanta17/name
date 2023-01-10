import {Component} from 'react'

import statesList from '../data'

import './index.css'

class Counter extends Component {
  render() {
    console.log(statesList)
    return (
      <div>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <div>0</div>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
      </div>
    )
  }
}

export default Counter
