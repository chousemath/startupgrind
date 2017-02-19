import React, { Component } from 'react';
import '../public/css/materialize.css';
import '../public/css/materialize.min.css';
import '../public/css/style.css';

export default class InfoBlock extends Component {
  render() {
    return (
      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center red-text lighten-1"><i className="material-icons">{this.props.icon}</i></h2>
          <h5 className="center">{this.props.title}</h5>
          <p className="light">{this.props.description}</p>
        </div>
      </div>
    );
  }
}
