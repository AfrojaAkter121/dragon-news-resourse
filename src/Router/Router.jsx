import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
                Component: CategoryNews,
            }
        ]
    },
    {
        path: '/*',
        element: <h1>Error 404</h1>
    }
])