import React, { lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import App from '../App';
import { product } from '../API/ProductAPI';

let About = lazy(() => import('../pages/About'));
let Contact = lazy(() => import('../pages/Contact'));


function AppRoutes() {
    let router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '',
                    element: <App />,
                },
                {
                    path: 'about',
                    loader: product,
                    hydrateFallbackElement: <div>Loading...</div>,
                    element: <About />,
                },
                {
                    path: '/contact',
                    element: <Contact />
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes
