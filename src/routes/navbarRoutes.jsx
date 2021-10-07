
import ProgrammingView from '../views/ProgrammingView.jsx';
import {DesignView} from '../views/DesignView.jsx';
import BlogView from '../views/BlogView.jsx';
import AboutView from '../views/AboutView.jsx';
import GoogleUXProject from '../views/Design/GoogleUXProject.jsx'

export const navbarRoutes = [
    {
        path: "/about",
        name: "About",
        element: <AboutView />,
    },
    {
        path: "/programming",
        name: "Programming",
        element: <ProgrammingView />
    },
    {
        path: "/design",
        name: "Design",
        element: <DesignView />

    },
    {
        path: "/blog",
        name: "Blog",
        element: <BlogView />,
    }
]
