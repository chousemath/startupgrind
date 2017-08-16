import React, { Component } from 'react';
import '../public/css/materialize.css';
import '../public/css/materialize.min.css';
import '../public/css/style.css';

export default class Header extends Component {
  render() {
    return (
      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo">Startup Grind</a>
          <ul className="right hide-on-med-and-down">
            <li><a className="modal-trigger" href="#modal-jobs">Jobs</a></li>
            <li><a href="#people">People</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>

          <ul id="nav-mobile" className="side-nav">
            <li><a className="modal-trigger" href="#modal-jobs">Jobs</a></li>
            <li><a href="#people">People</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    );
  }
}
