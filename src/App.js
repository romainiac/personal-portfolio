// Author: Roman Yefimets
// Purpose: main App component
// created: Aug 9, 2021

import React from 'react';
import "antd/dist/antd.css";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import routes from "./routes.js";

const hist = createBrowserHistory();



// todo: make routes.js file and have mapping to navigation
class App extends React.Component {

  render() {
    return (
      <Router history={hist}>
        <Switch>
          {
            routes.map((prop,key) =>
              <Route 
                path={prop.path}
                component={prop.component}
              />
            )
          }
        </Switch>

      </Router>
    )
  }


}

export default App;


