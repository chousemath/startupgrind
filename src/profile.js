import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
        <div className="col s12 m3">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator profile-image" src={this.props.image} />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{this.props.name}<i className="material-icons right">more_vert</i></span>
              <p><a href={this.props.companyUrl}>{this.props.companyName}</a></p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">{this.props.name}<i className="material-icons right">close</i></span>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
    );
  }
}
