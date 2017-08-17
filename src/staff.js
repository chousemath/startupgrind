import React, { Component } from 'react';
import Profile from './profile';
import 'whatwg-fetch';

export default class Staff extends Component {
  state = {
    members: []
  };

  fetchMembers() {
    let fetchUrl = 'https://hiu3i4e3lj.execute-api.ap-northeast-2.amazonaws.com/dev/startup-grind-staff';
    fetch(fetchUrl)
      .then(function(response) {
        return response.json();
      }).then(body => {
        this.setState({members: body.members});
      })
  }

  componentDidMount() {
    this.fetchMembers();
  }

  render() {
    return (
      <div className="section no-pad-bot">
        <div className="row">
          {this.state.members.map(function(member, i){
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
