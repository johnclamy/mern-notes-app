const Footer: React.FC = () => (
    <footer className="col-span-full w-full border-t border-white/10 px-3 pt-5 sm:px-4 sm:pt-6">
        <div className="flex w-full flex-col items-center justify-between gap-2 rounded-2xl bg-white/5 px-4 py-4 text-center ring-1 ring-inset ring-white/10 sm:flex-row sm:text-left">
            <p className="text-sm font-medium text-slate-300">
                &copy; {new Date().getFullYear()} micro-post
            </p>
            <p className="text-xs text-slate-500">
                Share something worth reading.
            </p>
        </div>
    </footer>
)


export default Footer
