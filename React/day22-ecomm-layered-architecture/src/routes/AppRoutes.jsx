import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import PublicProtected from './protected/PublicProtected'
import AuthLayout from '../app/layout/AuthLayout'
import LoginPage from '../features/auth/ui/pages/LoginPage'
import RegisterPage from '../features/auth/ui/pages/RegisterPage'
import MainLayout from '../app/layout/MainLayout'
import MainProtected from './protected/MainProtected'
import HomePage from '../shared/ui/pages/HomePage'
import ProductPages from '../features/product/ui/pages/ProductPages'
import CartPages from '../features/cart/ui/pages/CartPages'
import OrderPages from '../features/orders/ui/pages/OrderPages'
import { hydrateUser } from '../features/auth/api/authApi'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/auth/state/authSlice'

function AppRoutes() {
    let dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                let res = await hydrateUser();
                dispatch(addUser(res));
                
            } catch (error) {
                console.log("error in hydration....", error);
            }
        })()
    }, [])

    let router = createBrowserRouter([
        // authenticatedRoutes
        {
            path: '/',
            element: <PublicProtected />,
            children: [
                {
                    path: '/',
                    element: <AuthLayout />,
                    children: [
                        {
                            path: '',
                            element: <LoginPage />
                        },
                        {
                            path: 'register',
                            element: <RegisterPage />
                        }
                    ]
                },
            ]
        },
        // mainRoutes
        {
            path: '/main',
            element: <MainProtected />,
            children: [
                {
                    path: '',
                    element: <MainLayout />,
                    children: [
                        {
                            path: '',
                            element: <HomePage />
                        },
                        {
                            path: 'products',
                            element: <ProductPages />
                        },
                        {
                            path: 'carts',
                            element: <CartPages />
                        },
                        {
                            path: 'orders',
                            element: <OrderPages />
                        },
                    ]
                }
            ]
        }
    ])


    return <RouterProvider router={router} />
}

export default AppRoutes
