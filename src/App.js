import React, { Component } from 'react';
import Header from './header';
import InfoBlock from './info-block';
import Profile from './profile';
import Job from './job';
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
              formUrl='https://goo.gl/forms/iCBpArTZVQOmzHSF3'
              title='Doc and Me'
              description='Doc and Me is looking for a promising, hungry frontend web developer intern to help extend the Doc and Me web platform across multiple browsers and mobile platforms. Extensive experience in HTML, CSS, and jQuery is desired. Please fill out the Google Form application by clicking on the shiny red button above!'
              companyUrl='http://www.docandme.com/' />


          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Close</a>
          </div>
        </div>


        <div id="index-banner" id="about" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br/><br/>
              <h3 className="header center white-text text-lighten-2">Have the Startup Dream?</h3>
              <div className="row center hide-on-med-and-down">
                <h5 className="header col s12 light">All startups are a grind at some point. Come join us and learn how to do it better.</h5>
              </div>
              <div className="row center hide-on-med-and-down">
                <a href="https://www.startupgrind.com/seoul/" id="download-button" className="btn-large waves-effect waves-light red lighten-1">Startup Grind Global</a>
              </div>
              <br/><br/>
            </div>
          </div>
          <div className="parallax black darken-4"><img src="https://s3.ap-northeast-2.amazonaws.com/startup-grind/startup_grind_0_tablet.jpg" className="transparent-image" alt="Unsplashed background img 1" /></div>
        </div>


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


        <div className="parallax-container valign-wrapper" id="people">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h5 className="header col s12 light">
                  An organization's most important assets are its people, and we are no different!
                </h5>
              </div>
            </div>
          </div>
          <div className="parallax black darken-4"><img src="https://s3.ap-northeast-2.amazonaws.com/startup-grind/startup_grind_1_tablet.jpg" className="transparent-image" alt="Unsplashed background img 2" /></div>
        </div>

        <div className="section no-pad-bot">
          <div className="row">
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_joon.jpg'
              description='Restaurant discovery and searching for is often difficult. To search for relevant and useful information is time-consuming, especially when most of the information out there is in Korean. MangoPlate is your go-to app for discovering the best Korean restaurants and Korean food.'
              name='Joon Oh'
              snsUrl='https://www.linkedin.com/in/joon-oh-a213598/'
              snsName='LinkedIn'
              companyName='MangoPlate'
              companyUrl='https://www.mangoplate.com/' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_mike.jpg'
              description='Currently leading APAC Partnerships for Google for Entrepreneurs. Mike is passionate about empowering and supporting the next generation of entrepreneurial pioneers in Asia.'
              name='Mike Kim'
              snsUrl='https://www.linkedin.com/in/mikekim/'
              snsName='LinkedIn'
              companyName='Google'
              companyUrl='https://www.google.co.kr/?gfe_rd=cr&ei=fTqnWJfsIPLO8ge_pKfwAQ&gws_rd=ssl' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_hyemin.jpg'
              description='Finance start-up Finda asks users a series of questions regarding financial status and goals, and uses the answers to find the most suitable services from over 1,000 financial products.'
              name='Hyemin Lee'
              snsUrl='https://www.linkedin.com/in/leehyemin/'
              snsName='LinkedIn'
              companyName='Finda'
              companyUrl='https://www.finda.co.kr/' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_sungpil.jpg'
              description='앱 마케팅, 에어브릿지와 쉽고 간편하게. 하나의 링크로 고객획득에서 채널분석까지 한번에 해결하세요.'
              name='Sungpil Nam'
              snsUrl='https://www.linkedin.com/in/sungpilnam/'
              snsName='LinkedIn'
              companyName='Airbridge'
              companyUrl='https://airbridge.io/' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_dongin.jpg'
              description='와탭은 다양한 서버 환경을 지원하는 강력한 모니터링 서비스입니다.'
              name='Dongin Lee'
              snsUrl='https://www.linkedin.com/in/lee-dongin-8a49485b/'
              snsName='LinkedIn'
              companyName='Whatap'
              companyUrl='https://www.whatap.io/' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_euntae.jpg'
              description='Restaurant discovery and searching for is often difficult. To search for relevant and useful information is time-consuming, especially when most of the information out there is in Korean. MangoPlate is your go-to app for discovering the best Korean restaurants and Korean food.'
              name='Euntae Cho'
              snsUrl='https://www.linkedin.com/in/euntae-cho-014264119/'
              snsName='LinkedIn'
              companyName='MangoPlate'
              companyUrl='https://www.mangoplate.com/' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_james.jpg'
              description='Find the right hospital for you and book appointments online at an instant. Read verified hospital reviews and ratings by real patients. Search by metro station and specialty.'
              name='James Ahn'
              snsUrl='https://www.facebook.com/captainsherlock'
              snsName='Facebook'
              companyName='Doc&amp;Me'
              companyUrl='http://www.docandme.com/' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_hyuk.jpg'
              description='머맨 커스텀기어는 2013년 정식으로 시작한 프리다이빙 및 수상/수중활동을 위한 워터스포츠 브랜드로 기술력과 안전성, 높은 컬리티, 아름다운 디자인을 브랜드 원칙으로 커스텀으로 제작하여 국내 외 12개국 이상으로 판매되고 있는 브랜드 입니다.'
              name='Hyuk Choi'
              snsUrl='https://www.linkedin.com/in/hyuk-choi-737319111/'
              snsName='LinkedIn'
              companyName='Merman Gear'
              companyUrl='http://merman.subnara.info/' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_joseph.jpg'
              description='As a lover of technology, science fiction, and literature, Joseph’s interests have always been all over the spectrum. He’s spent time as a petroleum engineer in the deserts of Qatar, a door-to-door solar salesman, a community manager for 3D printing communities, and now the chief technology officer for a healthcare startup.'
              name='Joseph Choi'
              snsUrl='https://www.linkedin.com/in/joseph-choi-835b7659/'
              snsName='LinkedIn'
              companyName='Doc&amp;Me'
              companyUrl='http://www.docandme.com/' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_jaeha.jpg'
              description='No description available'
              name='Jaeha Lee'
              snsUrl='https://www.linkedin.com/in/jaehadlee/'
              snsName='LinkedIn'
              companyName='Doc&amp;Me'
              companyUrl='http://www.docandme.com/' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_alex.jpeg'
              description='Hailing from Asheville, NC, Alex attended the University of Pennsylvania for his undergrad and Johns Hopkins for grad school where he studied International Economics. After working for a few years in Silicon Valley at various startups, he moved to Korea as he was attracted by the potential of the Korean startup ecosystem.'
              name='Alex Gershon'
              companyName='Hyperconnect'
              snsUrl='https://www.linkedin.com/in/alexgershon/'
              snsName='LinkedIn'
              companyUrl='https://career.hpcnt.com/about-hyperconnect/' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_seon.jpg'
              description='A graduate of Chung-Ang University and the UCLA School of Public Health, Seonyoung, has worked as a Korean/English interpreter/translator over 10 years across various industries. She is passionate about startups and helps with live translations at Startup Grind Seoul. In her free time, she loves traveling the world and watching live jazz.'
              name='Seonyoung Park'
              snsUrl=''
              snsName=''
              companyName=''
              companyUrl='' />
          </div>
        </div>

        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <br/><br/>
              <h3 className="header center white-text text-lighten-2">Startup Grind Korea Blog</h3>
              <div className="row center hide-on-med-and-down">
                <a href="https://www.startupgrind.com/seoul/" id="download-button" className="btn-large waves-effect waves-light red lighten-1">See more posts</a>
              </div>
              <br/><br/>
            </div>
          </div>
          <div className="parallax black darken-4"><img src="https://s3.ap-northeast-2.amazonaws.com/startup-grind/startup_grind_2_tablet.jpg" className="transparent-image" alt="Unsplashed background img 3" /></div>
        </div>

          <div className="row">
            <div className="col s12">
              <ul className="collapsible" data-collapsible="accordion">
                <li>
                  <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
                  <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
                  <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                  <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
              </ul>
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
