import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Knowledge from '../pages/Knowledge';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

export const router=createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/competence",
        element: <Knowledge/>,
    },
    {
        path: "/porfolio",
        element: <Portfolio/>,
    },
    {
        path: "/contact",
        element: <Contact/>,
    },
    {
        path: "/*",
        element: <NotFound/>,
    },
]);