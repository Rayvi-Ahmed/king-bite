
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../../Main/Main";
import Home from "../../Pages/Home/Home";
import Chefs from "../../Pages/Chefs/Chefs";
import AboutUs from "../../Pages/Home/AboutUs/AboutUs";
import Contact from "../../Pages/Contact/Contact";
import Impront from "../../Pages/Imprint/Impront";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/chefs',
                element: <Chefs></Chefs>

            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>

            },
            {
                path: '/contact',
                element: <Contact></Contact>

            },
            {
                path: '/imprint',
                element: <Impront></Impront>

            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>

            }


        ]
    },
]);

export default router;