import React, { Component } from 'react';

export default class Profile extends Component {
  returnActionButtons = () => {
    let styles = {
      cardActions: {
        fontSize: 11
      }
    };
    if (this.props.snsUrl || this.props.companyUrl) {
      return (
        <div className="card-action" style={styles.cardActions}>
          <a href={this.props.companyUrl}>{this.props.companyName}</a>
          <br className="hide-on-large-only" />
          <a href={this.props.snsUrl}>{this.props.snsName}</a>
        </div>
      );
    }
  }

  render() {
    let styles = {
      memberName: {
        fontSize: 20
      }
    };
    return (
        <div className="col s12 m4 l3">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator profile-image" src={this.props.image} alt={this.props.name} />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4" style={styles.memberName}>{this.props.name.split(' ')[0]}<i className="material-icons right">more_vert</i></span>
            </div>
            {this.returnActionButtons()}
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">{this.props.name}<i className="material-icons right">close</i></span>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
    );
  }
}
