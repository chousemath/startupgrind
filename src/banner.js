import React, { Component } from 'react';

export default class Banner extends Component {
  render() {
    return (
      <div className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
              <h5 className="header col s12 light">Startup Grind Seoul is also a place for students to learn and grow!</h5>
            </div>
          </div>
        </div>
        <div className="parallax black darken-4"><img src="https://s3.ap-northeast-2.amazonaws.com/startup-grind/startup_grind_3.jpg" className="transparent-image" alt="Unsplashed background img 3" /></div>
      </div>
    );
  }
}
