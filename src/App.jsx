// Author: Roman Yefimets
// Purpose: main App component
// created: Aug 9, 2021

import "antd/dist/antd.css";
//import { createBrowserHistory } from "history";
//import routes from "./routes.js";
import NavBar from './components/NavBar';
import { AppRoutes } from './routes/index.jsx';
//const hist = createBrowserHistory();

/*
const RouteWrapper = ({path, name, component: Component}) => (
  <Route exact path={path} render={(props) => (
    <div>
      <NavBar selected={name}/>
      <Component {...props}/>
    </div>
  )}/>
)
*/

function App() {
  return (
    <div className = "App">
      <NavBar />
      <AppRoutes />
    </div>
  );
}

export default App;


