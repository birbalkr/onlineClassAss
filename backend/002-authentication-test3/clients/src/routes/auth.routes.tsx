import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import LoginForm from '../components/auth/LoginForm'
import RegisterForm from '../components/auth/RegisterForm'
import MainpageLayout from '../components/layout/MainpageLayout'
import ForgotPage from '../components/auth/ForgotPage'
import AppPageLayout from '../components/layout/AppPageLayout'


const AuthRoutes = createBrowserRouter([
    { path: "/", element: <Navigate to="/auth/login" replace />, },
    {
        path: '/auth',
        element: <MainpageLayout />,
        children: [
            {
                path: 'login',
                element: <LoginForm />
            },
            {
                path: 'register',
                element: <RegisterForm />
            },
            {
                path: 'forgot',
                element: <ForgotPage />
            },
            {
                path: 'me',
                element:<AppPageLayout/>
            }
        ]
    }
])

function AuthRoutesApp() {
    return <RouterProvider router={AuthRoutes} />;
}
export default AuthRoutesApp;