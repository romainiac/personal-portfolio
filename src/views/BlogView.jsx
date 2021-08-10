// Author: Roman Yefimets
// Purpose: main App component
// created: Aug 9, 2021

import React from 'react';
import NavBar from '../components/NavBar'


class BlogView extends React.Component {

  render() {
    return (
        <div>
            <NavBar/>
            this is my blog
        </div>
    )
  }

}

export default BlogView;
