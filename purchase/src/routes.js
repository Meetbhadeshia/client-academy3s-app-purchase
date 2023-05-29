import { useRoutes } from 'react-router-dom';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Courses from "./pages/Courses"
import Profile from "./pages/Profile"
import Contact from "./pages/Contact"
import About from "./pages/About"
import IndividualCourse from "./pages/IndividualCourse"
import Checkout from "./pages/Checkout"

const mainRoutes = [
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/courses',
        element: <Courses />,
    },
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/course',
        element: <IndividualCourse />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/checkout',
        element: <Checkout />
    }
];

export default function Router() {
    const routes = useRoutes(mainRoutes)
    return routes;
}