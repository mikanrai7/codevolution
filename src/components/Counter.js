import React, { Component } from 'react'

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    let count = Number(localStorage.getItem("count"));
    if (count != undefined) this.setState({ count });
  }

  increment() {
    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log("callback value", this.state.count);
    //   localStorage.setItem("count", this.state.count);
    this.setState (prevState => ({
    count: prevState.count+1
}))
    }
  

  clear() {
    this.setState({ count: 0 });
    localStorage.setItem("count", 0);
  }

  incrementFive(){
      this.increment()
      this.increment()
      this.increment()
      this.increment()
      this.increment()
  }
  render() {
    return (
      <div>
        <div> Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Add</button>
        <button onClick={() => this.clear()}>Clear</button>
      </div>
    );
  }
}

export default Counter
