import type IUser from '../user/IUser'


const CreatePost: React.FC<{ user: IUser }> = ({ user }) => {
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Handle post creation logic here
    }

    return (
        <div className="col-span-full flex min-h-screen w-full flex-col items-center justify-center bg-slate-950 p-4 text-slate-100">
            {/* Bento Card Container */}
            <form
                onSubmit={handleSubmit}
                className="grid w-full max-w-lg grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-black/40 backdrop-blur-sm"
            >
                {/* Header Cell — Spans full width */}
                <div className="col-span-2 rounded-xl bg-linear-to-br from-emerald-500/20 via-teal-500/10 to-transparent p-5 ring-1 ring-inset ring-white/10">
                    <h1 className="text-xl font-bold tracking-tight text-white">
                        Create Post
                    </h1>
                    <p className="mt-1 text-sm text-slate-300">
                        Posting as{' '}
                        <span className="font-semibold text-emerald-300">
                            {user.name}
                        </span>
                    </p>
                </div>

                {/* Title Cell — Spans full width */}
                <div className="col-span-2 rounded-xl bg-white/5 p-4 ring-1 ring-inset ring-white/10 transition-colors focus-within:bg-white/10 focus-within:ring-emerald-500/50">
                    <label
                        htmlFor="title"
                        className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Give your post a catchy title..."
                        className="w-full bg-transparent text-lg font-semibold text-white placeholder-slate-600 focus:outline-none"
                        required
                    />
                </div>

                {/* Content Cell — Spans full width */}
                <div className="col-span-2 rounded-xl bg-white/5 p-4 ring-1 ring-inset ring-white/10 transition-colors focus-within:bg-white/10 focus-within:ring-emerald-500/50">
                    <label
                        htmlFor="content"
                        className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400"
                    >
                        Content
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        rows={4}
                        placeholder="What's on your mind?"
                        className="w-full resize-none bg-transparent text-sm leading-relaxed text-slate-200 placeholder-slate-600 focus:outline-none"
                        required
                    />
                </div>

                {/* Tip Cell — Balances the grid asymmetrically */}
                <div className="rounded-xl bg-white/5 p-4 ring-1 ring-inset ring-white/10 flex flex-col justify-center">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-1">
                        Tip
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                        Clear formatting helps your post stand out.
                    </p>
                </div>

                {/* Submit Cell — Acts as the primary action button */}
                <button
                    type="submit"
                    className="col-span-1 rounded-xl bg-emerald-600 p-4 ring-1 ring-inset ring-emerald-400/30 transition-all hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-[0.98] flex items-center justify-center group cursor-pointer"
                >
                    <span className="font-bold text-white">
                        Publish
                    </span>
                    <svg 
                        className="w-4 h-4 ml-2 text-white transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </form>
        </div>
    )
}


export default CreatePost
