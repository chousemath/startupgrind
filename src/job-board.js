import React, { Component } from 'react';

export default class JobBoard extends Component {
  render() {
    return (
      <div className="carousel carousel-slider center" data-indicators="true">
        <div className="carousel-fixed-item center">
          <a className="btn waves-effect white grey-text darken-text-2">Apply Now!</a>
        </div>
        <Job href='one' backgroundColor='red' title='Student Internship Opportunity' description='This is your first panel' />
        <Job href='two' backgroundColor='blue' title='Student Internship Opportunity' description='This is your first panel' />
        <Job href='three' backgroundColor='green' title='Student Internship Opportunity' description='This is your first panel' />
        <Job href='four' backgroundColor='purple' title='Student Internship Opportunity' description='This is your first panel' />
      </div>
    );
  }
}
