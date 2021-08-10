// Author: Roman Yefimets
// Purpose: main App component
// created: Aug 9, 2021

import React from 'react';
import NavBar from '../components/NavBar'


class AboutView extends React.Component {

  render() {
    return (
      <div>
          <NavBar/>
          My name is Roman, and I am awesomse!
      </div>
  )
  }

}

export default AboutView;


