import {navbarRoutes} from "./navbarRoutes"
import {routes} from "./routes"
import { useRoutes} from "react-router-dom";


export const AppRoutes = () => {

    const element = useRoutes([...navbarRoutes, ...routes]);
    return <>{element}</>;
  };