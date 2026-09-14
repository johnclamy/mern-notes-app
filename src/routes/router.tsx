// Router configuration
import { createBrowserRouter } from "react-router-dom"
import routes from './route'
import PublicLayout from "../components/layout/PublicLayout"
import ProtectedLayout from "../components/layout/ProtectedLayout"
import DefaultPage from "../pages/Default"
import LoginPage from "../pages/Login"
import ChangePasswordPage from "../pages/ChangePassword"
import RegisterPage from "../pages/Register"


const protectedRoutes = [{
    element: <ProtectedLayout />,
    children: [
        { path: routes.default, element: <DefaultPage /> },
        { path: routes.changePassword, element: <ChangePasswordPage /> },        
    ],
}]


const publicRoutes = [{
    element: <PublicLayout />,
    children: [
        { path: routes.login, element: <LoginPage /> },
        { path: routes.register, element: <RegisterPage /> },
    ],
}]


const router = createBrowserRouter([
    ...protectedRoutes,
    ...publicRoutes,
])


export default router
