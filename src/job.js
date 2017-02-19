import React, { Component } from 'react';

export default class Job extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <div className="black darken-4">
                <img className="transparent-image-jobs" src={this.props.imgUrl} />
              </div>
              <span className="card-title"><a className="inherit-color" href={this.props.companyUrl}>{this.props.title}</a></span>
              <a href={this.props.formUrl} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
            </div>
            <div className="card-content">
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
