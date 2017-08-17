import React, { Component } from 'react';
import Header from './header';
import InfoBlock from './info-block';
import Profile from './profile';
import Job from './job';
import Staff from './staff';
import Parallax from './parallax';

import '../public/css/materialize.css';
import '../public/css/materialize.min.css';
import '../public/css/style.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <div id="modal-jobs" className="modal modal-fixed-footer">
          <div className="modal-content">
            <div className="row">
              <div className="col s12">
                <h4>Job Board</h4>
                <p>We are in constant contact with some of the hottest startups in Seoul and want to help you find your place among them. Simply click the buttons associated with each job card to check out that company's application form!</p>
              </div>
            </div>

            <Job
              imgUrl='http://www.iqeyecare.com/sites/default/files/5-doctors1.jpg'
              imgAlt='docandme job 1'
              formUrl='https://goo.gl/forms/iCBpArTZVQOmzHSF3'
              title='Doc and Me'
              description='Doc and Me is looking for a promising, hungry frontend web developer intern to help extend the Doc and Me web platform across multiple browsers and mobile platforms. Extensive experience in HTML, CSS, and jQuery is desired. Please fill out the Google Form application by clicking on the shiny red button above!'
              companyUrl='http://www.docandme.com/' />

          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Close</a>
          </div>
        </div>

        <Parallax
          sectionTitle="Have the Startup Dream?"
          sectionSubtitle="All startups are a grind at some point. Come join us and learn how to do it better."
          sectionImage="https://s3.ap-northeast-2.amazonaws.com/startup-grind/startup_grind_0_tablet.jpg"
          sectionId="about"
          btnText="Startup Grind Global"
          btnLink="https://www.startupgrind.com/seoul/" />

        <div className="container">
          <div className="section">
            <div className="row">
              <InfoBlock
                description='Every relationship is ultimately an act of faith. Here at Startup Grind Seoul, we want to foster a spirit of giving help before asking for it because we are proactive like that ^^'
                icon='insert_emoticon'
                title='Give' />
              <InfoBlock
                description='If you think you can do it alone, you are already in for a world of pain. Find like-minded individuals who can support you on your epic journey.'
                icon='person_pin'
                title='Make Friends' />
              <InfoBlock
                description='Everyone needs a helping hand once in a while. Let us know in person how we can help you achieve greatness. We would love to aid you in becoming successful!'
                icon='healing'
                title='Help Each Other' />
            </div>
          </div>
        </div>

        <Parallax
          sectionTitle="Our people, who we are"
          sectionImage="https://s3.ap-northeast-2.amazonaws.com/startup-grind/startup_grind_1_tablet.jpg"
          sectionId="people" />

        <Staff />

        <Parallax
          sectionTitle="Startup Grind Korea Blog"
          sectionImage="https://s3.ap-northeast-2.amazonaws.com/startup-grind/startup_grind_2_tablet.jpg"
          sectionId="blog"
          btnText="See more posts"
          btnLink="https://www.startupgrind.com/seoul/" />

        <footer className="page-footer red lighten-1">
          <div className="container">
            <div className="row">
              <div className="col l12 s12">
                <h5 className="white-text">Startup Grind Values</h5>
                <p className="grey-text text-lighten-4">We believe in making friends, not contacts. We believe in giving, not taking. We believe in helping others before helping yourself. We are truly passionate about helping founders, entrepreneurs and startups succeed. We intend to make their startup journey less lonely, more connected and more memorable.</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            Made by <a className="brown-text text-lighten-3" href="https://www.linkedin.com/in/joseph-choi-835b7659/">Joseph Sungpil Choi</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
