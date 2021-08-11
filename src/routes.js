import ProgrammingView from './views/ProgrammingView.jsx';
import DesignView from './views/DesignView.jsx';
import BlogView from './views/BlogView.jsx';
import AboutView from './views/AboutView.jsx';

var routes = [
    {
        path: "/about",
        name: "About",
        component: AboutView
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


]

export default routes;