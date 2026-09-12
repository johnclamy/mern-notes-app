{/* micro-blog-project/src/components/layout/Wrapper.tsx */}
import type { ReactNode } from 'react'


type WrapperProps = {
	children?: ReactNode
}


const Wrapper = ({ children }: WrapperProps) => {
	return (
		<div
			className="min-h-screen text-slate-100 antialiased"
			style={{
				background:
					'radial-gradient(1200px 800px at 20% 10%, rgba(143, 183, 255, .18), transparent 60%), #0b0f1a',
				fontFamily: 'system-ui',
				fontSize: '16px',
				lineHeight: 1.5,
			}}
		>
			<div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
				<div className="grid flex-1 grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:gap-5 sm:p-5 lg:grid-cols-12 lg:p-6">
					{children}
				</div>
			</div>
		</div>
	)
}

export default Wrapper
