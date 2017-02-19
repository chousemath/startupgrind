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
              companyName='MangoPlate'
              companyUrl='https://www.mangoplate.com/' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_mike.jpg'
              description='Currently leading APAC Partnerships for Google for Entrepreneurs. Mike is passionate about empowering and supporting the next generation of entrepreneurial pioneers in Asia.'
              name='Mike Kim'
              companyName='Google'
              companyUrl='https://www.google.co.kr/?gfe_rd=cr&ei=fTqnWJfsIPLO8ge_pKfwAQ&gws_rd=ssl' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_hyemin.jpg'
              description='Finance start-up Finda asks users a series of questions regarding financial status and goals, and uses the answers to find the most suitable services from over 1,000 financial products.'
              name='Hyemin Lee'
              companyName='Finda'
              companyUrl='https://www.finda.co.kr/' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_sungpil.jpg'
              description='앱 마케팅, 에어브릿지와 쉽고 간편하게. 하나의 링크로 고객획득에서 채널분석까지 한번에 해결하세요.'
              name='Sungpil Nam'
              companyName='Airbridge'
              companyUrl='https://airbridge.io/' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_dongin.jpg'
              description='와탭은 다양한 서버 환경을 지원하는 강력한 모니터링 서비스입니다.'
              name='Dongin Lee'
              companyName='Whatap'
              companyUrl='https://www.whatap.io/' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_euntae.jpg'
              description='Restaurant discovery and searching for is often difficult. To search for relevant and useful information is time-consuming, especially when most of the information out there is in Korean. MangoPlate is your go-to app for discovering the best Korean restaurants and Korean food.'
              name='Euntae Cho'
              companyName='MangoPlate'
              companyUrl='https://www.mangoplate.com/' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_james.jpg'
              description='Find the right hospital for you and book appointments online at an instant. Read verified hospital reviews and ratings by real patients. Search by metro station and specialty.'
              name='James Ahn'
              companyName='Doc&amp;Me'
              companyUrl='http://www.docandme.com/' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_hyuk.jpg'
              description='머맨 커스텀기어는 2013년 정식으로 시작한 프리다이빙 및 수상/수중활동을 위한 워터스포츠 브랜드로 기술력과 안전성, 높은 컬리티, 아름다운 디자인을 브랜드 원칙으로 커스텀으로 제작하여 국내 외 12개국 이상으로 판매되고 있는 브랜드 입니다.'
              name='Hyuk Choi'
              companyName='Merman Custom Gear'
              companyUrl='http://merman.subnara.info/' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_joseph.jpg'
              description='Find the right hospital for you and book appointments online at an instant. Read verified hospital reviews and ratings by real patients. Search by metro station and specialty.'
              name='Joseph Choi'
              companyName='Doc&amp;Me'
              companyUrl='http://www.docandme.com/' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_anonymous.jpg'
              description='No description available'
              name='Jaeha Lee'
              companyName='Doc&amp;Me'
              companyUrl='http://www.docandme.com/' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_alex.jpeg'
              description='No description available'
              name='Alex Gershon'
              companyName=''
              companyUrl='https://www.amazon.com/Me-Dog-Gene-Weingarten/dp/1442494131' />
            <Profile
              image='https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_seon.jpg'
              description='No description available'
              name='Seon Park'
              companyName=''
              companyUrl='http://merman.subnara.info/' />
          </div>
        </div>





        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h5 className="header col s12 light">Startup Grind is a community designed to inspire, and connect entrepreneurs.</h5>
              </div>
            </div>
          </div>
          <div className="parallax black darken-4"><img src="https://s3.ap-northeast-2.amazonaws.com/startup-grind/startup_grind_2_tablet.jpg" className="transparent-image" alt="Unsplashed background img 3" /></div>
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
