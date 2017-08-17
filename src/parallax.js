import React, { Component } from 'react';

export default class Parallax extends Component {
  renderSubtitle() {
    if (this.props.sectionSubtitle) {
      return <div className="row center hide-on-med-and-down">
        <h5 className="header col s12 light">{this.props.sectionSubtitle}</h5>
      </div>;
    }
  }

  renderBtn() {
    if (this.props.btnText && this.props.btnLink) {
      return <div className="row center hide-on-med-and-down">
        <a href={this.props.btnLink} id="download-button" className="btn-large waves-effect waves-light red lighten-1">{this.props.btnText}</a>
      </div>;
    }
  }

  render() {
    return (

      <div className="parallax-container valign-wrapper" id={this.props.sectionId}>
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
              <h3 className="header col s12 light">
                {this.props.sectionTitle}
              </h3>
              {this.renderSubtitle()}
              {this.renderBtn()}
            </div>
          </div>
        </div>
        <div className="parallax black darken-4">
          <img src={this.props.sectionImage} className="transparent-image" alt="Unsplashed background img 2" />
        </div>
      </div>

    );
  }
}
