import React, { Component } from 'react';
import Header from './header';
import InfoBlock from './info-block';
import Profile from './profile';
import Job from './job';
import Staff from './staff';
import Parallax from './parallax';

import '../public/css/materialize.min.css';
import '../public/css/style.css';
import './App.css';

class App extends Component {
  render() {
    let styles = {
      blogSpacer: {margin: '10px'},
      blogSpacer2: {margin: '10px', fontStyle: 'italic'}
    };

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
          sectionId="blog" />

        <div className="container">
          <div className="col s12">
            <div className="card">
              <div className="card-content">


                <span className="card-title">
                  How to land a startup job as a foreigner living in Korea
                </span>
                <p>
                  <i>by Alex Gershon</i>
                </p>
                <p style={styles.blogSpacer}>
                  Note: Landing a job at a Korean startup, regardless of your professional experience, is going to be very difficult and require a lot of grinding and dedication. That being said, the personal and professional growth you will undergo working at a startup makes the hustle worthwhile. Without further ado, here are the steps to take to land that perfect startup job.
                </p>
                <p style={styles.blogSpacer}>
                  Before contacting anyone, it is very important that you acclimate yourself to the startup atmosphere in Korea. For that reason, it is highly recommended that you start your search by attending local startup events such as Startup Grind Seoul, the litany events that happen at Google Campus Seoul, and scour Meetup for events that might interest you. At these events you will find entrepreneurs of all shapes and sizes who will give you a better understanding of what it means to work at a startup in Korea and the roles that are available for foreigners.
                </p>
                <p style={styles.blogSpacer}>
                  Once you have a strong grasp of what you’re getting into, check out this chart from Startup Alliance that lists all the major startups in Korea. What I recommend is going through each of the startups on this list, checking out their website, and see if: a) the product or service they are offering can be internationalized and b) if it is something that interests you. If the company fits both of these criteria, go to Crunchbase to see if they’ve raised any funding. It isn’t impossible to work for a startup without funding but those without funding are far less likely to hire foreign talent.
                </p>
                <p style={styles.blogSpacer}>
                  Once you have the list of companies that have funding and a product that can internationalize, you need to start reaching out to these companies to perform informational interviews. Even if startups need to internationalize, they still might be hesitant to hire a random foreigner so your chance of landing a job lies in your approach and delivery of this step. Not everyone at the company may speak English so it is important you’re careful in finding one that does. The best way to go about this is find the list of employees on the company’s About Us page (or run a LinkedIn search on the company) and find an employee that list a Western university in their education. Ideally this person would have a similar role to what you want but this isn’t always feasible.
                </p>
                <p style={styles.blogSpacer}>
                  Once you have this, it is time to figure out their email address. If it is not listed on the company website or their LinkedIn, I recommend just trying to email theirfirstname@company.com. 9/10 this will work. In the chance that it doesn’t you can always just reach out via the company’s “Contact Us” page but the chance you’ll hear back from them through this method is 50-50.
                </p>
                <p style={styles.blogSpacer}>
                  As for what to say in your introductory email, this template should be helpful.
                </p>
                <p style={styles.blogSpacer2}>
                  <br/>
                  Dear [Person’s Name], My name is [Your Name] and I’m currently doing [Insert Occupation] in South Korea. I’ve been following [Insert Company Product] very closely and love how you’ve been able to do X while improving Y. I was wondering if you’ve thought about [Insert something that shows you’ve thought critical about their company]? I’d love to grab a quick coffee with you to learn more about [their product, their company, etc.]. Please let me know when and where are most convenient for you.
                  <br/>Best,
                  <br/>Your Name
                  <br/><br/>
                </p>
                <p style={styles.blogSpacer}>
                  If you do not hear back from this person for a week, just send a quick follow up showing your interest again. People are very busy, these emails can fall through the cracks.
                </p>
                <p style={styles.blogSpacer}>
                  Once you’ve heard back and set up a date to meet, you need to start prepping so you’re not wasting your time nor their time. The Korean startup community is rather small so if you upset one company, word can get out.
                </p>
                <p style={styles.blogSpacer}>
                  For your research, you should learn as much as you can about the company and industry. Develop a list of ten to fifteen questions that you can ask the person you are meeting. These questions should not just help you learn more about their company but they should also show the person that you have certain competencies that would make you a worthwhile hire.
                </p>
                <p style={styles.blogSpacer}>
                  Towards the end of the meeting, the person you are talking with will ask you how they can help you and that’s when you explain that you’re looking for work. With this information, they might introduce you to someone else, say they cannot help, or ask you to send them your resume to float around their office.
                </p>
                <p style={styles.blogSpacer}>
                  Regardless of how the meeting goes, make sure to email the person afterwards w/in 24 hours to thank them for their time and reiterate your interest in their product. If, during the interview, they didn’t ask about ways to help you, you can finish your email mentioning how you’re looking to break into the startup scene and if they know anyone who might need your services. At the end, attach your resume.
                </p>
                <p style={styles.blogSpacer}>
                  If all this effort leads to a job, congratulations. If not, at least use this chance to build up your network in Korea as a job will eventually open up. The larger you build your network, the easier it’ll be to land a startup job.
                </p>
              </div>
            </div>
          </div>
        </div>



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
