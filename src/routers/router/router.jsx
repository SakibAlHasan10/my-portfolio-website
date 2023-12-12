import { createBrowserRouter } from "react-router-dom";
import Root from "../../pages/root/Root";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Works from "../../pages/works/Works";
import Contact from "../../pages/contact/Contact";
import Credentials from "../../pages/about/Credentials";

const router = createBrowserRouter([
{
    path:"/",
    element:<Root/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/portfolio",
            element:<Works/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/credentials",
            element:<Credentials/>
        }
    ]
}
])

export default router