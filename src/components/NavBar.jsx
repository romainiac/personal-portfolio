import React from 'react';

import {  
    Menu  
  } 
  from 'antd';
  
const { SubMenu } = Menu;

class NavBar extends React.Component {

    render() {
        return (
            <div className="navbar">
                <Menu mode="horizontal" style={styles.navbar}>
                <Menu.Item key="Home">
                    Home
                </Menu.Item>
                <Menu.Item key="Programming">
                    Programming
                </Menu.Item>
                <Menu.Item key="Design">
                    Design
                </Menu.Item>
                <Menu.Item key="Blog">
                    Blog
                </Menu.Item>
                <Menu.Item key="About">
                    About
                </Menu.Item>
                </Menu>
             </div>
        )
    }
}

export default NavBar;


const styles = {
    navbar: {
      justifyContent: 'center'
    }
  }