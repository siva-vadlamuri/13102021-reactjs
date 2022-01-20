import React, { Component } from "react";

export default class UserGreetings extends Component {
  state = {
    age: 18,
  };
  //   condtion? statement1(true) : statement2(false)
  render() {
    return (
      <div>
        {/* {this.state.isLoggedIn ? <p>Welcome User</p> : <p> Please signin </p>} */}
        {this.state.age < 18 ? (
          <p>Your are not elibile for vote</p>
        ) : (
          <p>You are elible for vote</p>
        )}
      </div>
    );
  }
}
