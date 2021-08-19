// Author: Roman Yefimets
// Purpose: main App component
// created: Aug 9, 2021

import React from 'react';
import NavBar from '../components/NavBar'
import profile from '../assets/profile-square.jpeg'
import AdaptiveCard from '../components/AdaptiveCard';

import {
  Row, 
  Col,
  Avatar
} 
  from 'antd'

import   {
  LinkedinOutlined,
  GithubOutlined,
  PhoneOutlined,
  MailOutlined
}
from   '@ant-design/icons'

class AboutView extends React.Component {

  render() {


    return (
      <div style={styles.view}>
        <AdaptiveCard>
          <h1>
            About Me
          </h1>
          <p>
            Hey! Thanks for stopping by.
            Welcome to my profile!
            I am a Software Engineer with a passion for creation, technology and innovation with a constant 	
            strive to grow and learn. 

            <br/>
            <br/>

            I currently work on the network security team at T-Mobile as a software engineer, 
            driving creative automation solutions to our security needs.
            I am passionate about aspects of my life which allow me to create and innovate. 
            I fell in love with programming because it allows me to create tools of various complexities. 
            I am pursuing design because it gives me a way to express myself, and I began animating 
            because I wanted my work to make others just as happy as their work makes me.

            <br/>
            <br/>
            Take a look around my profile if you are interested to see the work that makes me tick. 
          </p>
        </AdaptiveCard>

      <AdaptiveCard>
        <MailOutlined style={{fontSize:'30px', paddingRight: '2%'}}/>
         romanyefimets@gmail.com
      </AdaptiveCard>
      <AdaptiveCard>
        <LinkedinOutlined style={{fontSize:'30px', paddingRight: '2%'}}/>
        <a href={'https://www.linkedin.com/in/roman-yefimets/'}> https://www.linkedin.com/in/roman-yefimets/</a>
      </AdaptiveCard>
      <AdaptiveCard>
        <GithubOutlined style={{fontSize:'30px', paddingRight: '2%'}}/>
        <a href={'https://github.com/romainiac'}> https://github.com/romainiac</a>
      </AdaptiveCard>
    </div>
    )
  }

}

export default AboutView;

const styles = {
  view: {
      paddingTop: "5%"
  },
  bottom: {
    padding: "1%"
  }
}
