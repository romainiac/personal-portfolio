// Author: Roman Yefimets
// Purpose: main App component
// created: Aug 9, 2021

import React from 'react';
import NavBar from '../components/NavBar'
import profile from '../assets/profile-square.jpeg'

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

    var size = 5;

    return (
      <div style={styles.view}>
        <Row >
          <Col xs={1} sm={1} md={4} lg={8} xl={8}>
          </Col>
            <Col xs={22} sm={22} md={16} lg={8} xl={8}>
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
          </Col>
          <Col xs={1} sm={1} md={4} lg={8} xl={8}>
          </Col>
      </Row>

      <Row justify={'left'}>
        <Col xs={1} sm={1} md={4} lg={8} xl={8}/>
        <Col>
          <Avatar
            shape="square"
            src={profile}
            size={{
              xs: 24 * size * 2.5,
              sm: 32 * size * 2.5,
              md: 40 * size * 2.5,
              lg: 64 * size * 1.2,
              xl: 80 * size,
              xxl: 100 * size,
            }}>
          </Avatar>
        </Col>
        <Col xs={1} sm={1} md={4} lg={8} xl={8}/>
      </Row>
      <Row style={styles.bottom}>
          <Col xs={1} sm={1} md={4} lg={8} xl={8}/>
          <Col xs={3} sm={2} md={2} lg={1} xl={1}>
            <MailOutlined style={{fontSize:'30px', paddingRight: '2%'}}/>
          </Col>
          <Col xs={1} sm={1} md={10} lg={10} xl={10}>
              romanyefimets@gmail.com
          </Col>
          <Col xs={1} sm={1} md={4} lg={8} xl={8}/>
      </Row>
      <Row style={styles.bottom}>
        <Col xs={1} sm={1} md={4} lg={8} xl={8}/>
        <Col xs={3} sm={2} md={2} lg={1} xl={1}>
            <LinkedinOutlined style={{fontSize:'30px', paddingRight: '2%'}}/>
        </Col>
        <Col xs={1} sm={1} md={10} lg={10} xl={10}>
          <div>
            <a href={'https://www.linkedin.com/in/roman-yefimets/'}> https://www.linkedin.com/in/roman-yefimets/</a>
          </div>
        </Col>
        <Col xs={1} sm={1} md={4} lg={8} xl={8}/>
      </Row>
      <Row style={styles.bottom}>
        <Col xs={1} sm={1} md={4} lg={8} xl={8}/>
        <Col xs={3} sm={2} md={2} lg={1} xl={1}>
            <GithubOutlined style={{fontSize:'30px', paddingRight: '2%'}}/>
        </Col>
        <Col xs={1} sm={1} md={10} lg={10} xl={10}>
          <div>
            <a href={'https://github.com/romainiac'}> https://github.com/romainiac</a>
          </div>
        </Col>
        <Col xs={1} sm={1} md={4} lg={8} xl={8}/>
      </Row>
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
