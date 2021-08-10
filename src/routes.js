import HomeView from "./views/HomeView.jsx";
import ProgrammingView from './views/ProgrammingView.jsx';
import DesignView from './views/DesignView.jsx';
import BlogView from './views/BlogView.jsx';
import AboutView from './views/AboutView.jsx';

var routes = [
    {
        path: "/home",
        name: "Home",
        component: HomeView
    },
    {
        path: "/programming",
        name: "Programming",
        component: ProgrammingView
    },
    {
        path: "/design",
        name: "Design",
        component: DesignView
    },
    {
        path: "/blog",
        name: "Blog",
        component: BlogView
    },
    {
        path: "/about",
        name: "About",
        component: AboutView
    },

]

export default routes;