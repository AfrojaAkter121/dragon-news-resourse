import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Loader from "../Component/Loader/Loader";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Layout/PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout/>,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: '/category/:id',
                loader: ()=> fetch('/news.json'),
                hydrateFallbackElement: <Loader></Loader>,
                Component: CategoryNews,
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout/> ,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register,
            }
        ]
    },
    {
        path: '/news-details/:id',
        element: <PrivateRoute>
                    <NewsDetails></NewsDetails>
                </PrivateRoute>,
        loader: ()=> fetch('/news.json')
    },
    {
        path: '/*',
        element: <h1>Error 404</h1>
    }
])