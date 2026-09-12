{/* micro-post-project/src/components/layout/AuthBar.tsx */}
import Logout from '../app/user/Logout'


const AuthBar: React.FC = () => {
    const user = ''

    return (
        <nav className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {user ? (
                <Logout />
            ) : (
                <>
                    <button className="rounded-xl bg-white/50 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-slate-700 border border-white/40 transition-all hover:bg-white/70 hover:text-slate-900 whitespace-nowrap">
                        Login
                    </button>          
                    <button className="rounded-xl bg-linear-to-r from-blue-500 to-indigo-500 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white shadow-sm shadow-blue-500/20 transition-all hover:shadow-md hover:shadow-blue-500/30 hover:scale-105 whitespace-nowrap">
                        Register
                    </button>
                </>
            )}
        </nav>
    )
}


export default AuthBar
