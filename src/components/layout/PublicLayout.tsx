import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import routes from "../../routes/route"


// Layout for public users
const PublicLayout: React.FC = () => {
    const { isAuthenticated } = useAuth()

    if (isAuthenticated) {
        return <Navigate to={routes.default} />
    }

    return (
        // Public pages usually have a simpler background and no heavy header/footer
        <div className="flex flex-col min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
            {/* Optional: A simplified public header */}
            <header className="p-4 text-center">
                <h1 className="text-2xl font-bold text-indigo-600">MyApp</h1>
            </header>
        
            <main className="grow flex items-center justify-center p-6">
                <Outlet />
            </main>
        
            {/* Optional: A simplified public footer */}
            <footer className="p-4 text-center text-sm text-gray-500">
                Need help? Contact support.
            </footer>
        </div>
    )
}


export default PublicLayout
