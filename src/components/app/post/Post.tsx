import type IPost from './IPost'


type PostProps = {
    post: IPost
}


const Post: React.FC<PostProps> = ({ post }) => {
    return (
        <div className="flex w-full max-w-md flex-col items-center justify-start bg-slate-950 py-8 text-slate-100">
            <h1 className="mb-6 text-2xl font-bold tracking-tight text-white">Post</h1>

            {/* Bento Card */}
            <div className="grid w-full max-w-md grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-black/40 backdrop-blur-sm">
                {/* Title — spans full width */}
                <div className="col-span-2 rounded-xl bg-linear-to-br from-indigo-500/20 via-purple-500/10 to-transparent p-4 ring-1 ring-inset ring-white/10">
                    <p className="text-xs font-medium uppercase tracking-wider text-indigo-300/80">
                        Title
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                        {post.title}
                    </p>
                </div>

                {/* Content — spans full width */}
                <div className="col-span-2 rounded-xl bg-white/5 p-4 ring-1 ring-inset ring-white/10">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                        Content
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-200">
                        {post.content}
                    </p>
                </div>

                {/* Author */}
                <div className="rounded-xl bg-white/5 p-4 ring-1 ring-inset ring-white/10">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                        Author
                    </p>
                    <p className="mt-1 truncate text-sm font-medium text-white">
                        {post.author}
                    </p>
                </div>

                {/* Date */}
                <div className="rounded-xl bg-white/5 p-4 ring-1 ring-inset ring-white/10">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                        Date
                    </p>
                    <p className="mt-1 truncate text-sm font-medium text-white">
                        {post.dateCreated}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Post
