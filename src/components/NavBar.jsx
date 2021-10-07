import React from 'react';
import {navbarRoutes as routes} from '../routes/navbarRoutes'
import { Link} from "react-router-dom";

import {  
    Menu  
  } 
  from 'antd';

import Item from 'antd/lib/list/Item';

const { SubMenu } = Menu;

class NavBar extends React.Component {


    render() {
        return (
            <div className="navbar">
                <Menu 
                    mode="horizontal" 
                    style={styles.navbar}
                    selectedKeys={[this.props.selected]}
                >
                    {routes.map((prop, key) => 

                        <Menu.Item key={prop.name}>
                            <Link
                                to={{
                                    pathname: prop.path,
                                }}
                            
                            >
                                {prop.name}
                            </Link>
                        </Menu.Item>

                    )}
                </Menu>
             </div>
        )
    }
}

export default NavBar;

NavBar.defaultProps = {
    selected: 0
}

const styles = {
    navbar: {
      justifyContent: 'center'
    }
}