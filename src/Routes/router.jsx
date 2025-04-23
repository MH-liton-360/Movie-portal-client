import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../LayOuts/HomeLayout";
import AuthLayout from "../LayOuts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Error from "../Components/Error";
import PosterDetails from "../Components/PosterDetails";
import AddMovies from "../Components/AddMovies";
import MyFavorites from "../Components/MyFavorites";

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
            {
                path: "add-movies",
                element: (
                    <PrivateRoute>
                        <AddMovies></AddMovies>
                    </PrivateRoute>
                )
            },
            {
                path: "My-Favorites",
                loader: () => fetch('https://movie-portal-server-lsyhp9zsw-liton72524s-projects.vercel.app/movie'),

                element: (
                    <PrivateRoute>
                        <MyFavorites></MyFavorites>
                    </PrivateRoute>
                )
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