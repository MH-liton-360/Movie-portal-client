import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../LayOuts/HomeLayout";
import AuthLayout from "../LayOuts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Error from "../Components/Error";
import PosterDetails from "../Components/PosterDetails";

const router = createBrowserRouter([

    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "Poster/:id",
                element: (
                    <PrivateRoute>
                        <PosterDetails></PosterDetails>,
                    </PrivateRoute>
                ),
                loader: () => fetch('/MoviePortalBlogs.json'),

            },
        ]
    },

    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
        ]
    },
    {
        path: "*",
        element: <Error></Error>,
    },

]);

export default router;