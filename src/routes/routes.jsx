import {GoogleUXProject} from '../views/Design/GoogleUXProject.jsx'
import { HomeCookedProject } from '../views/Design/HomeCookedProject.jsx'
import { HomeCookedProject2 } from '../views/Design/HomeCookedProject2.jsx'

export const routes = [
    {
        path: "/design/seattle-orchestra-app-design",
        element: <GoogleUXProject/>,
    },
    {
        path: "/design/homecooked-app-design",
        element: <HomeCookedProject/>,
    },
    {
        path: "/design/homecooked2-app-design",
        element: <HomeCookedProject2/>,
    }
]