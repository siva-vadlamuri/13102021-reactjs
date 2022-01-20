import React, { Component } from "react";

export default class Products extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p className="error">Error Message</p>
        <p>$:{this.props.price} </p>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}
