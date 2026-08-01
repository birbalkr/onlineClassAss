import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import LoginPage from '../pages/LoginPage'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'
function AppRouter() {
    let router = createBrowserRouter([
        {
            path: '/',
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
        },
        {
            path: '/main',
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <HomePage />
                }
            ]
        }
    ])

    return <RouterProvider router={router} />;
};

export default AppRouter
