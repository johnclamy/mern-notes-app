import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import routes from "../../routes/route"
import Wrapper from "./Wrapper"
import Header from "./Header"
import Footer from "./Footer"


// Layout for authenticated users
const ProtectedLayout: React.FC = () => {
    const { isAuthenticated } = useAuth()

    if (!isAuthenticated) {
        return <Navigate to={routes.login} />
    }

    return (
        <Wrapper>
            <Header />
                <Outlet />
            <Footer />
        </Wrapper>
    )
}


export default ProtectedLayout
