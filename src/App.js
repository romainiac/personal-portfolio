// Author: Roman Yefimets
// Purpose: main App component
// created: Aug 9, 2021

import React from 'react';
import "antd/dist/antd.css";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import routes from "./routes.js";
import NavBar from './components/NavBar';
const hist = createBrowserHistory();


const RouteWrapper = ({path, name, component: Component}) => (
  <Route path={path} render={(props) => (
    <div>
      <NavBar selected={name}/>
      <Component {...props}/>
    </div>
  )}/>
)

// todo: make routes.js file and have mapping to navigation
class App extends React.Component {

  render() {
    return (
      <div>
        <Router history={hist}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/about"/>
            </Route>
            { 
              routes.map((prop,key) =>
                <RouteWrapper 
                  key={prop.name}
                  path={prop.path}
                  name={prop.name}
                  component={prop.component}
                />
              )
            }
          </Switch>
        </Router>
      </div>

    )
  }


}

export default App;


