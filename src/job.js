import React, { Component } from 'react';

export default class Job extends Component {
  render() {
    return (
      <div className={"carousel-item " + this.props.backgroundColor + " white-text"} href={"#" + this.props.href + "!"}>
        <h2>{this.props.title}</h2>
        <p className="white-text">{this.props.description}</p>
      </div>
    );
  }
}
