const ChangePassword: React.FC = () => {
    return (
        <div className="col-span-full flex w-full items-center justify-center px-1 py-8 sm:px-4 sm:py-12">
            <form
                onSubmit={(event) => event.preventDefault()}
                className="grid w-full max-w-4xl grid-cols-1 gap-3 rounded-3xl border border-white/10 bg-slate-950/70 p-3 text-slate-100 shadow-2xl shadow-black/30 backdrop-blur-xl sm:grid-cols-2 sm:p-4 lg:grid-cols-4"
            >
                <div className="rounded-2xl bg-linear-to-br from-blue-400/25 via-indigo-400/10 to-transparent p-5 ring-1 ring-inset ring-white/10 sm:col-span-2 lg:col-span-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200/80">
                        Account security
                    </p>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        Change password
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300">
                        Keep your micro-post account protected with a password you do not reuse elsewhere.
                    </p>
                </div>

                <div className="flex min-h-40 flex-col justify-between rounded-2xl bg-white/6 p-5 ring-1 ring-inset ring-white/10">
                    <svg className="h-7 w-7 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.5 6.5L20 12l-6.5 1.5L12 20l-1.5-6.5L4 12l6.5-2.5L12 3z" />
                    </svg>
                    <p className="text-sm leading-relaxed text-slate-300">
                        Use at least 8 characters with a mix of letters and numbers.
                    </p>
                </div>

                <div className="rounded-2xl bg-white/6 p-4 ring-1 ring-inset ring-white/10 transition-colors focus-within:bg-white/10 focus-within:ring-blue-400/60 sm:col-span-2 lg:col-span-2">
                    <label htmlFor="current-password" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Current password
                    </label>
                    <input
                        type="password"
                        id="current-password"
                        name="currentPassword"
                        autoComplete="current-password"
                        className="w-full bg-transparent text-base text-white outline-none placeholder:text-slate-600"
                        placeholder="Enter current password"
                        required
                    />
                </div>

                <div className="rounded-2xl bg-white/6 p-4 ring-1 ring-inset ring-white/10 transition-colors focus-within:bg-white/10 focus-within:ring-blue-400/60 sm:col-span-1 lg:col-span-2">
                    <label htmlFor="new-password" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        New password
                    </label>
                    <input
                        type="password"
                        id="new-password"
                        name="newPassword"
                        autoComplete="new-password"
                        className="w-full bg-transparent text-base text-white outline-none placeholder:text-slate-600"
                        placeholder="Create a new password"
                        required
                    />
                </div>

                <div className="rounded-2xl bg-white/6 p-4 ring-1 ring-inset ring-white/10 transition-colors focus-within:bg-white/10 focus-within:ring-blue-400/60 sm:col-span-1 lg:col-span-2">
                    <label htmlFor="confirm-password" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Confirm new password
                    </label>
                    <input
                        type="password"
                        id="confirm-password"
                        name="confirmPassword"
                        autoComplete="new-password"
                        className="w-full bg-transparent text-base text-white outline-none placeholder:text-slate-600"
                        placeholder="Repeat new password"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="group flex min-h-20 items-center justify-between rounded-2xl bg-blue-500 p-5 text-left ring-1 ring-inset ring-blue-300/40 transition-all hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.99] sm:col-span-2 lg:col-span-2"
                >
                    <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-blue-100">Ready?</span>
                        <span className="mt-1 block font-bold text-white">Update password</span>
                    </span>
                    <span className="text-xl transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </button>
            </form>
        </div>
    )
}


export default ChangePassword
