import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor", this.props.name);
    this.state = {
      count: 0,
      count1: 1,
    };
  }

  componentDidMount() {
    // Api call made
    console.log("did mount", this.props.name);
  }
  render() {
    console.log("render", this.props.name);
    const { name, address, number } = this.props;
    const { count, count1 } = this.state;
    return (
      <div className="user-data">
        <h3>Name: {name}</h3>
        <h3>Address: {address}</h3>
        <h3>Number: {number}</h3>
        <p>count: {count}</p>
        <p>count1: {count1}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 1,
            });
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default UserClass;
