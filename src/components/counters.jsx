import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Counters-updated");
    console.log("Counters-previous props:-", prevProps);
    console.log("Counters-previous state:-", prevState);
  }
  render() {
    console.log("Counters-Rendered");
    const {
      counters,
      onDelete,
      onIncrement,
      onDecrement,
      onReset
    } = this.props;
    return (
      <React.Fragment>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          >
            #:{counter.id}:
          </Counter>
        ))}
        <button className="btn btn-info btn-sm m-2" onClick={onReset}>
          Reset
        </button>
      </React.Fragment>
    );
  }
}

export default Counters;
