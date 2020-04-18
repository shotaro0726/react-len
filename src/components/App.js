import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  
  //初期化処理
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  
  //数値をプラスにする
  plusButton = () => {
    const count = this.state.count
    this.setState({ count: count + 1 })
  }
  
  //数値をマイナスにする
  minusButton = () => {
    const count = this.state.count
    this.setState({ count: count - 1 })
  }
  
  //実際に画面に反映されるところ
  render() {
    return (
      <React.Fragment>
        <div>count:{this.state.count} </div>  
        <button onClick={this.plusButton}>+1</button>
        <button onClick={this.minusButton}>-1</button>
      </React.Fragment>
    )
  }
}



export default App;
