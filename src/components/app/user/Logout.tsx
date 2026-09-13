import { type LogoutProps } from './IUser'


const Logout: React.FC<LogoutProps> = ({ setUser }) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            setUser('')
        }}>
            <input
                type="submit"
                value="Logout"
                className="rounded-xl bg-red-500 px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-red-600 sm:px-4 sm:py-2 sm:text-sm cursor-pointer whitespace-nowrap"
            />
        </form>
    )
}


export default Logout
