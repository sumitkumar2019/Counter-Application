import React, { Component } from "react";
class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Counter-updated");
    console.log("Counter-previous props:-", prevProps);
    console.log("Counter-previous state:-", prevState);
  }
  componentWillUnmount() {
    console.log("Counter-component - unmounted");
  }
  render() {
    console.log("Counter-Rendered");
    let classes = "btn btn-sm m-2 ";
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">{this.props.children}</div>
          <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className={classes + " btn-secondary"}
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className={classes + "btn-secondary"}
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              className={classes + "btn-danger"}
              onClick={() => this.props.onDelete(this.props.counter)}
            >
              X
            </button>
            <br />
          </div>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    //const x = <p>Zero</p>;
    //return count === 0 ? x : count;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
