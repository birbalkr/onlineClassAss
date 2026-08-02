import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import LoginPage from '../pages/LoginPage'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/AuthSlice'
import PublicProtected from './protected/PublicProtected'
import MainProtected from './protected/MainProtected'
import ShopPage from '../pages/ShopPage'
import AboutPage from '../pages/AboutPage'
function AppRouter() {
    let dispatch = useDispatch();

    const hydrateUser = () => {
        let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
        if (!loggedInUser) {
            toast.error("Please login first")
            return
        }
        dispatch(addUser(loggedInUser))
    }

    useEffect(() => {
        hydrateUser()
    }, [])



    let router = createBrowserRouter([
        {
            path: '/',
            element: <PublicProtected />,
            children: [{
                path: '',
                element: <AuthLayout />,
                children: [
                    {
                        path: "",
                        element: <LoginPage />
                    },
                    {
                        path: "register",
                        element: <RegisterPage />
                    }
                ]
            },]
        },
        {
            path: '/main',
            element: <MainProtected />,
            children: [{
                path: '',
                element: <MainLayout />,
                children: [
                    {
                        path: "",
                        element: <HomePage />
                    }, {
                        path: "shop",
                        element: <ShopPage />
                    },
                    {
                        path: "about",
                        element: <AboutPage />
                    }
                ]
            }]
        }
    ])

    return <RouterProvider router={router} />;
};

export default AppRouter
