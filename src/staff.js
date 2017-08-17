import React, { Component } from 'react';
import Profile from './profile';

export default class Staff extends Component {
  render() {
    let members = [
      {
        name: 'Joon Oh',
        image: 'https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_joon.jpg',
        description: 'Restaurant discovery and searching for is often difficult. To search for relevant and useful information is time-consuming, especially when most of the information out there is in Korean. MangoPlate is your go-to app for discovering the best Korean restaurants and Korean food.',
        snsUrl: 'https://www.linkedin.com/in/joon-oh-a213598/',
        snsName: 'LinkedIn',
        companyName: 'MangoPlate',
        companyUrl: 'https://www.mangoplate.com/'
      },
      {
        name: 'Mike Kim',
        image: 'https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_mike.jpg',
        description: 'Currently leading APAC Partnerships for Google for Entrepreneurs. Mike is passionate about empowering and supporting the next generation of entrepreneurial pioneers in Asia.',
        snsUrl: 'https://www.linkedin.com/in/mikekim/',
        snsName: 'LinkedIn',
        companyName: 'Google',
        companyUrl: 'https://www.google.co.kr/?gfe_rd=cr&ei=fTqnWJfsIPLO8ge_pKfwAQ&gws_rd=ssl'
      },
      {
        name: 'Hyemin Lee',
        image: 'https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_hyemin.jpg',
        description: 'Finance start-up Finda asks users a series of questions regarding financial status and goals, and uses the answers to find the most suitable services from over 1,000 financial products.',
        snsUrl: 'https://www.linkedin.com/in/leehyemin/',
        snsName: 'LinkedIn',
        companyName: 'Finda',
        companyUrl: 'https://www.finda.co.kr/'
      },
      {
        name: 'Sungpil Nam',
        image: 'https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_sungpil.jpg',
        description: '앱 마케팅, 에어브릿지와 쉽고 간편하게. 하나의 링크로 고객획득에서 채널분석까지 한번에 해결하세요.',
        snsUrl: 'https://www.linkedin.com/in/sungpilnam/',
        snsName: 'LinkedIn',
        companyName: 'Airbridge',
        companyUrl: 'https://airbridge.io/'
      },
      {
        name: 'Dongin Lee',
        image: 'https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_dongin.jpg',
        description: '와탭은 다양한 서버 환경을 지원하는 강력한 모니터링 서비스입니다.',
        snsUrl: 'https://www.linkedin.com/in/lee-dongin-8a49485b/',
        snsName: 'LinkedIn',
        companyName: 'Whatap',
        companyUrl: 'https://www.whatap.io/'
      },
      {
        name: 'Euntae Cho',
        image: 'https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_euntae.jpg',
        description: 'Restaurant discovery and searching for is often difficult. To search for relevant and useful information is time-consuming, especially when most of the information out there is in Korean. MangoPlate is your go-to app for discovering the best Korean restaurants and Korean food.',
        snsUrl: 'https://www.linkedin.com/in/euntae-cho-014264119/',
        snsName: 'LinkedIn',
        companyName: 'MangoPlate',
        companyUrl: 'https://www.mangoplate.com/'
      },
      {
        name: 'James Ahn',
        image: 'https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_james.jpg',
        description: 'Find the right hospital for you and book appointments online at an instant. Read verified hospital reviews and ratings by real patients. Search by metro station and specialty.',
        snsUrl: 'https://www.facebook.com/captainsherlock',
        snsName: 'Facebook',
        companyName: 'Doc&Me',
        companyUrl: 'http://www.docandme.com/'
      },
      {
        name: 'Hyuk Choi',
        image: 'https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_hyuk.jpg',
        description: '머맨 커스텀기어는 2013년 정식으로 시작한 프리다이빙 및 수상/수중활동을 위한 워터스포츠 브랜드로 기술력과 안전성, 높은 컬리티, 아름다운 디자인을 브랜드 원칙으로 커스텀으로 제작하여 국내 외 12개국 이상으로 판매되고 있는 브랜드 입니다.',
        snsUrl: 'https://www.linkedin.com/in/hyuk-choi-737319111/',
        snsName: 'LinkedIn',
        companyName: 'Merman Gear',
        companyUrl: 'http://merman.subnara.info/'
      },
      {
        name: 'Joseph Choi',
        image: 'https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_joseph.jpg',
        description: 'As a lover of technology, science fiction, and literature, Joseph’s interests have always been all over the spectrum. He’s spent time as a petroleum engineer in the deserts of Qatar, a door-to-door solar salesman, a community manager for 3D printing communities, and now the chief technology officer for a healthcare startup.',
        snsUrl: 'https://www.linkedin.com/in/joseph-choi-835b7659/',
        snsName: 'LinkedIn',
        companyName: 'Doc&Me',
        companyUrl: 'http://www.docandme.com/'
      },
      {
        name: 'Jaeha Lee',
        image: 'https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_jaeha.jpg',
        description: 'No description available',
        snsUrl: 'https://www.linkedin.com/in/jaehadlee/',
        snsName: 'LinkedIn',
        companyName: 'Doc&Me',
        companyUrl: 'http://www.docandme.com/'
      },
      {
        name: 'Alex Gershon',
        image: 'https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_alex.jpeg',
        description: 'Hailing from Asheville, NC, Alex attended the University of Pennsylvania for his undergrad and Johns Hopkins for grad school where he studied International Economics. After working for a few years in Silicon Valley at various startups, he moved to Korea as he was attracted by the potential of the Korean startup ecosystem.',
        companyName: 'Hyperconnect',
        snsUrl: 'https://www.linkedin.com/in/alexgershon/',
        snsName: 'LinkedIn',
        companyUrl: 'https://career.hpcnt.com/about-hyperconnect/'
      },
      {
        name: 'Seonyoung Park',
        image: 'https://s3.ap-northeast-2.amazonaws.com/startup-grind/profile_seon.jpg',
        description: 'A graduate of Chung-Ang University and the UCLA School of Public Health, Seonyoung, has worked as a Korean/English interpreter/translator over 10 years across various industries. She is passionate about startups and helps with live translations at Startup Grind Seoul. In her free time, she loves traveling the world and watching live jazz.',
        snsUrl: 'https://www.facebook.com/seonyoung.park.737',
        snsName: 'Facebook',
        companyName: 'Startup Grind',
        companyUrl: 'http://startupgrind.co.kr/'
      }
    ];

    return (
      <div className="section no-pad-bot">
        <div className="row">

          {members.map(function(member, i){
            return <Profile
              image={member.image}
              description={member.description}
              name={member.name}
              snsUrl={member.snsUrl}
              snsName={member.snsName}
              companyName={member.companyName}
              companyUrl={member.companyUrl}
              key={i} />;
          })}

        </div>
      </div>
    );
  }
}
