{/* micro-blog-project/src/App.tsx */}
import { RouterProvider } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import router from "./routes/router"


const App: React.FC = () => {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    )
}


export default App
