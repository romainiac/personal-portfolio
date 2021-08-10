// Author: Roman Yefimets
// Purpose: main App component
// created: Aug 9, 2021

import React from 'react';
import "antd/dist/antd.css";

import NavBar from '../components/NavBar'

class HomeView extends React.Component {

    render() {
        return (
            <div className="App">
                <NavBar/>
                <p>Hi! My name is Roman Yefimets.</p>
                <p>This is my profile.</p>
                <p>As you can tell, it is still a work in progress</p>
            </div>
        )
    }

}

export default HomeView;
