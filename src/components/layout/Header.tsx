{/* micro-blog-project/src/components/layout/Header.tsx */}
import AuthBar from './AuthBar'
// import type LoginNavigationProps from './interface'


const Header: React.FC = () => {
    return (
        <header className="sticky top-4 z-50 col-span-full w-full px-3 sm:px-4">
            <div className="mx-auto max-w-6xl">
                {/* Header Navbar Glass Container */}
                <div className="flex items-center justify-between gap-2 sm:gap-4 rounded-2xl border border-white/60 bg-white/40 p-2 sm:p-3 backdrop-blur-xl shadow-[0_10px_15px_-3px_rgba(59,130,246,0.05),inset_0_1px_0_rgba(255,255,255,0.8)] overflow-hidden">
                    {/* Left Section: Logo */}
                    <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 shrink-0 min-w-0">
                        <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-linear-to-br from-blue-400 to-indigo-500 shadow-sm shadow-blue-500/20 shrink-0">
                            <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="currentColor">
                                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                            </svg>
                        </div>
                        <h1 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-800 whitespace-nowrap">micro-post</h1>
                    </div>
                    <AuthBar />
                </div>
            </div>
        </header>
    )
}


export default Header
