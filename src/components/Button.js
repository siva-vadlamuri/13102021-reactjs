import React, { Component } from "react";
import "../styles/Button.css";
export default class Button extends Component {
  render() {
    console.log(this.props);
    return <button className="btn">{this.props.title}</button>;
  }
}
